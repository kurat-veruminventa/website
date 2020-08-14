import React from 'react'
import Logo from './Logo'


import './Footer.css'



export default () => (
    <div>
        <div class="full-width-footer white-text">
            <div class="footer-container">
                <div class="footer-column-left">
                      <Logo />
                </div>
                <div class="footer-column">
                    <span><ul class="list-unstyled">
                          <li>
                            <h5>WHO WE ARE</h5>
                          </li>
                          <li>
                            <a href="/press">Press</a>
                          </li>
                          <li>
                            <a href="/investor">Investor</a>
                          </li>
                          <li>
                            <a href="/technology">Technology</a>
                          </li>
                          <li>
                            <a href="/career">Career</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/privacy-policy">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                    </ul>
                    </span>
                </div>
                <div class="footer-column">
                <span><ul class="list-unstyled">
                      <li>
                        <h5>TECHNOLOGY</h5>
                      </li>
                      <li>
                        <a href="/technology/space">Space</a>
                      </li>
                      <li>
                        <a href="/technology/virtual-reality">Virtual Reality</a>
                      </li>
                      <li>
                        <a href="/technology/real-estat3e">Real Estate</a>
                      </li>
                      <li>
                        <a href="/technology/industrial-machines">Industrial Machines</a>
                      </li>
                      <li>
                        <a href="/technology/music-glove">Music Glove</a>
                      </li>
                      <li>
                        <a href="/research">Research Center</a>
                      </li>
                </ul>
                </span>
                </div>
                <div class="footer-column">
                <span><ul class="list-unstyled hide-mobile">
                      <li>
                        <h5>GET UPDATES FROM US</h5>
                      </li>
                      <li>
                        <a class="button gradient" href="/subscribe">Subscribe</a>
                      </li>
                      <li>
                        &nbsp;
                      </li>
                      <li>
                        &nbsp;
                      </li>
                      <li>
                        <h5>LEGAL</h5>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                </ul>
                </span>
                </div>
            </div>
        </div>
        <div class="footer-center">
          <span>
            © Copyright {new Date().getFullYear()} Ntention. All rights reserved. Developed by{' '}
            <a href="https://www.lowedesign.no/">Løwe Design</a>.
          </span>
        </div>
    </div>
)
