import React from 'react';
import { Link } from 'react-scroll'
import logo from '../assets/images/chaintelligence-logo-white.svg';

class Nav extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = false
    }

    toggleBox = () => {
        this.setState(prevState => ({ isToggleVisible: !prevState.isToggleVisible }));
    };
    render(){
        
        const { isToggleVisible } = this.state;

        return(
            <div className="navigation_layout">
                <nav className="header_section"> 
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="chaintelligence"/>
                        </a> 
                    </div>
                    <div className="navigation">
                        <a className="github" href="https://github.com/"><span></span> Github</a>
                        <button className="toggleButton" onClick={this.toggleBox} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
                <div className={`slideMenu ${isToggleVisible ? "active" : ""}`}>
                    <div className="slideToggle_head">
                        <p>MENU</p>
                        <button className="closeToggle" onClick={this.toggleBox}></button>
                    </div>
                    <div className="header_nav">
                        <Link activeClass="active" to="solutions" spy={true} smooth={true} offset={10} duration={500} onClick={this.toggleBox}>
                            Solutions
                        </Link>
                        <Link activeClass="active" to="technology" spy={true} smooth={true} offset={10} duration={500} onClick={this.toggleBox}>
                            Technology
                        </Link>
                        <Link activeClass="active" to="team" spy={true} smooth={true} offset={10} duration={500} onClick={this.toggleBox}>
                            Team & Advisors
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={this.toggleBox}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

  
export default Nav;