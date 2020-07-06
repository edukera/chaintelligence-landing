import React from 'react';
import logo from '../assets/images/chaintelligence-logo-white.svg';
import { Link } from 'react-scroll'
import edukera from '../assets/images/edukera.svg';

const FooterTop = () => (
    <div className="footer_layout"> 
         <div className="container_layout">
            <div className="footer_block">
            <div className="footer_left">
                <div className="footer_column">
                    <a href="/" className="footer_logo"><img src={logo} alt="chaIntelligence" /></a>
                </div>
                <div className="footer_column service_column">
                    <p className="service_title">A Service by:</p>
                    <a href="https://www.edukera.com/" className="service_logo"><img src={edukera} alt="chaIntelligence" /></a>
                </div>
            </div>
            <div className="footer_right">
                <div className="footer_column">
                    <div className="social_nav">
                        <a href="https://github.com/" className="github_footer"><span></span>Github</a>
                        <a href="https://www.linkedin.com/" className="linkedin"><span></span>LinkedIn</a>
                        <a href="https://twitter.com/" className="twitter"><span></span>Twitter</a>
                    </div>
                </div>
                <div className="footer_column">
                    <div className="footer_navigation">
                        <Link activeClass="active" to="solutions" spy={true} smooth={true} offset={10} duration={500}>
                            Solutions
                        </Link>
                        <Link activeClass="active" to="technology" spy={true} smooth={true} offset={10} duration={500}>
                            Technology
                        </Link>
                        <Link activeClass="active" to="team" spy={true} smooth={true} offset={10} duration={500}>
                            Team & Advisors
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
)
  
export default FooterTop;