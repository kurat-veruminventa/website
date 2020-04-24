import React from "react";
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import './globalStyles.css'
import Image from '../components/Image'
import './Content.css'


class ProfileTabs extends React.PureComponent {
  state = { activeIndex: 0 };

  handleChange = (_, activeIndex) => this.setState({ activeIndex });
  render() {
    const { activeIndex } = this.state;
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        <VerticalTabs value={activeIndex} onChange={this.handleChange}>
          <MyTab label="Business Team" />
          <MyTab label="Tech Team" />
          <MyTab label="Board of Advisors" />
        </VerticalTabs>

        {activeIndex === 0 && <TabContainer>
                <div class="column">
                    <a href="mailto:hfp@ntention.com">
                    <Image src="https://i.ibb.co/7WjbY3H/Vegard.jpg" alt="Email Vegard J. Løwe" />
                    </a>
                </div>
                <div class="column">
                    <h3>Test</h3>
                    <div class="symbol">
                        <a href="mailto:hfp@ntention.com">
                        <Image src="https://i.ibb.co/fDpJn9t/Email-symbol.jpg" alt="Email Vegard J. Løwe" />
                        </a>
                        <a href="https://www.linkedin.com/in/vegard-lowe/">
                        <Image src="https://i.ibb.co/HGMCrDS/Linkedin-symbol.jpg" alt="LinkedIn Vegard J. Løwe" />
                        </a>
                    </div>
                </div>


        </TabContainer>}
        {activeIndex === 1 && <TabContainer>Tech Team</TabContainer>}
        {activeIndex === 2 && <TabContainer>Board of Advisors</TabContainer>}
      </div>
    );
  }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column"
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const MyTab = withStyles(theme => ({
  root: {
    backgroundColor: "white",
    borderRadius: 0,
    font: "Lato",
    fontWeight: "900",
    fontSize: "20px",
    alignItems: "Left",
    textTransform: "capitalize",
  },
  wrapper: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius
  },
  selected: {
    color: "black",
    borderBottom: "4px solid black",
    font: "Lato",
    fontWeight: "900",
    fontSize: "20px",
  }
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24, fontSize: '1.235em', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6}}>
      {props.children}
    </Typography>
  );
}

export default ProfileTabs;
