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
      <Tab><h4>Wide impact</h4></Tab>
    </TabList>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Agile team</h2>
                <p>
                When you combine a burning desire to change the world for the better with a young ambitious team, you'll get an agile group of people ready to do whatever it takes to move boundaries. By short time, Ntention has managed to attract recognized partnerships with big players including NASA partners and the leading Nordic company on model-based implementation within the construction industry.
                </p>
                </div>
                <div class="column">
                    <Image src="/images/investor/Agile-team.jpg" alt="Agile team" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Research-based</h2>
                <p>
                Our interaction system designs build upon leading research within the interaction system field,
                especially within 3-dimensional spatial interaction and spatial digital computing. We combine
                interaction systems and tailored functionality with AI, Machine Learning & Big Data Analysis
                using our algorithms to understand the intent of the user, to create robust and intuitive systems.
                The way we approach interaction systems and gesture-based control and interfacing with
                Machines, opens opportunities for usage in a wide array of applications.
                </p>
                </div>
                <div class="column">
                    <Image src="/images/investor/Research-based.jpg" alt="research-based" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Visionary</h2>
                <p>
                It requires top league innovators to lead a generation through a paradigm shift. Ntention work with state-of-the-art technology and has an unique position in the global market. By commitment to become a global leader, the technology will evolve and expand into new markets. The team members has a long history of entrepreneurial activities and innovation awards.
                </p>
                </div>
                <div class="column">
                    <Image src="/images/investor/Visionary.jpg" alt="Visionary team" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Passion</h2>
                <p>
                Passion is one of those intangibles that drives an entrepreneur, gets them through the good times and the bad times, and ultimately dictates the success of any startup. The Ntention team is passionate for new technology and innovative solutions for changing the world for the better. The passion is instilled into the DNA of our entire company.
                </p>
                </div>
                <div class="column">
                    <Image src="/images/contact/Team-working.jpg" alt="Passionate" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
    <TabPanel>
        <section class="section row">
            <div class="container taLeft reverse">
                <div class="column">
                <h2>Wide impact</h2>
                <p>
                Ntention's technological solutions ranges in industries like construction, off-shore, art and culture, and space. Despite the broad impact, it all revolves around how humans interact with the world around us. It is a clear technical similarity in all the industries and use cases; it is all about understanding human communication, body language, and vocal and translate the human intent into machine command.
                </p>
                </div>
                <div class="column">
                    <Image src="/images/investor/High-reward.jpg" alt="Wide impact" className={'container'}/>
                </div>
            </div>
        </section>
    </TabPanel>
  </Tabs>
)
