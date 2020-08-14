import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Tabs.css';
import Image from './Image'

export default () => (
  <Tabs>
    <TabList>
      <Tab><h4>All positions</h4></Tab>
      <Tab><h4>Business team</h4></Tab>
      <Tab><h4>Tech team</h4></Tab>
    </TabList>
    <TabPanel>
            <div class="container taLeft links">
            <p>
                No open positions? We are always looking for talents, please submit a general application to <a href="mailto:contact@ntention.com">contact@ntention.com</a>
            </p>
            </div>
    </TabPanel>
    <TabPanel>
            <div class="container taLeft links">
            <p>
                No open positions? We are always looking for talents, please submit a general application to <a href="mailto:contact@ntention.com">contact@ntention.com</a>
            </p>
            </div>
    </TabPanel>
    <TabPanel>
            <div class="container taLeft links">
            <p>
                No open positions? We are always looking for talents, please submit a general application to <a href="mailto:contact@ntention.com">contact@ntention.com</a>
            </p>
            </div>
    </TabPanel>
  </Tabs>
)
