import React from 'react'
import { Link } from 'gatsby'
//import InstagramFeed from './InstagramFeed'
import Logo from './Logo'


import './Footer.css'



export default () => (
    <div>
        <div class="full-width-footer">
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
                        <a href="/technology/drone-glove">Drone Glove</a>
                      </li>
                      <li>
                        <a href="/technology/industrial-machines">Industrial Machines</a>
                      </li>
                      <li>
                        <a href="/music-glove">Music Glove</a>
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
                        <a class="button" href="#">Subscribe</a>
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
                        <a href="/privacy">Privacy Policy</a>
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



/*
export default () => (
  <div>
  <footer className="footer">
    <div className="container taCenter">
      <span>
        © Copyright {new Date().getFullYear()} Ntention. All rights reserved. Developed by{' '}
        <a href="https://www.lowedesign.no/">Løwe Design</a>.
      </span>
    </div>
  </footer>
  </div>
)*/
/*
<div class="full-width-footer">
    <div class="footer-column">
        <h2>Ntention</h2>Every other month we send out a newsletter to update everyone interested in our company or journey. We present to you highlights of the last couple of months and priority goals of the next couple of months.
    </div>
    <div class="footer-column"><h5>WHO WE ARE</h5><br>About<br>Press<br>Investor</div>
    <div class="footer-column"><h5>TECHNOLOGY</h5><br>Astronaut Smart Glove<br>Virtual Reality<br>Drone Glove</div>
    <div class="footer-column"><h5>GET UPDATES</h5><a class="button" href="#">Subscribe</a></div>
</div>*/
