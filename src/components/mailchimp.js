import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class MailChimp extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this._handleSubmit}>
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Name"
                            name="name"
                            className="Form--Input"
                        />
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Email"
                            name="email"
                            className="Form--Input"
                        />
                        <br />
                        <br />
                        <b>Favorite color:</b>
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
                                    value="1"
                                    name="group[21265][1]"
                                    id="color-red"
                                    onChange={this._handleChange}
                                />
                                <label htmlFor="color-red">red</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="2"
                                    name="group[21265][2]"
                                    id="color-orange"
                                    onChange={this._handleChange}
                                />
                                <label htmlFor="color-orange">orange</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="4"
                                    name="group[21265][4]"
                                    id="color-yellow"
                                    onChange={this._handleChange}
                                />
                                <label htmlFor="color-yellow">yellow</label>
                            </li>
                        </ul>
                        <input type="submit" value="Subscribe" className="button" />
                    </form>
                </div>
            </div>
        );
    }
}
