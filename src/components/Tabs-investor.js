import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Tabs.css';
import Image from './Image'

export default () => (
  <Tabs>
    <TabList>
      <Tab><h4>Agile team</h4></Tab>
      <Tab><h4>Research-based</h4></Tab>
      <Tab><h4>Visionary</h4></Tab>
      <Tab><h4>Passion</h4></Tab>
      <Tab><h4>High risk - high reward</h4></Tab>
    </TabList>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Agile team</h2>
                When you combine a burning desire to change the world for the better with a young ambitious team, you'll get an agile group of people ready to do whatever it takes to move boundaries. By short time, Ntention has managed to attract recognized partnerships with big players including NASA partners and the leading Nordic company on model-based implementation within the construction industry.
                </div>
                <div class="column">
                    <Image src="https://cdn.image4.io/ntention/f_auto/Assets/9cc68f32-0015-4878-8037-f20b95d7b453.Jpeg" alt="Agile team" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Research-based</h2>
                Our interaction system designs build upon leading research within the interaction system field,
                especially within 3-dimensional spatial interaction and spatial digital computing. We combine
                interaction systems and tailored functionality with AI, Machine Learning & Big Data Analysis
                using our algorithms to understand the intent of the user, to create robust and intuitive systems.
                The way we approach interaction systems and gesture-based control and interfacing with
                Machines, opens opportunities for usage in a wide array of applications.

                </div>
                <div class="column">
                    <Image src="https://cdn.image4.io/ntention/f_auto/Assets/26f4e2dd-21ba-4c4e-b6f3-73fbf4074f72.Jpeg" alt="research-based" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Visionary</h2>
                It requires top league innovators to lead a generation through a paradigm shift. Ntention work with state-of-the-art technology and has an unique position in the global market. By commitment to become a global leader, the technology will evolve and expand into new markets. The team members has a long history of entrepreneurial activities and innovation awards.
                </div>
                <div class="column">
                    <Image src="https://cdn.image4.io/ntention/f_auto/Assets/8e14be64-2f04-49ad-8027-b5d31eb3b3e6.Jpeg" alt="Visionary team" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Passion</h2>
                Passion is one of those intangibles that drives an entrepreneur, gets them through the good times and the bad times, and ultimately dictates the success of any startup. The Ntention team is passionate for new technology and innovative solutions for changing the world for the better. The passion is instilled into the DNA of our entire company.
                </div>
                <div class="column">
                    <Image src="https://cdn.image4.io/ntention/f_auto/Assets/5aa94b7b-5962-425f-b0b8-8aa6470ac0eb.Jpeg" alt="Passionate" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>High risk - high reward</h2>
                Investing in startup companies is a very risky business, but it can be very rewarding if and when the investments do pay off. Ntention ensures you that all investments will be exclusively prioritized for the best of the company and help us to fulfill our vision and move boundaries. That's why we look at all of our investors as close friends and part of the Ntention team.
                </div>
                <div class="column">
                    <Image src="https://cdn.image4.io/ntention/f_auto/Assets/f33eddec-b2d6-4787-b924-438b7cbfb259.Jpeg" alt="High risk - High reward" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
  </Tabs>
)
