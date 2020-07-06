import React from 'react';
import benoit from '../assets/images/benoit.png';
import guillaume from '../assets/images/guillaume.png';
import debra from '../assets/images/debra.jpg';
import randy from '../assets/images/randy.jpg';
import brandon from '../assets/images/brandon.jpg';

const Team = () => (
    <div className="team_section" id="team"> 
        <div className="container_layout">
            <h2 className="title black_title">Team & Advisors</h2>
            <div className="team_block">
            <div className="team_column">
                <div className="member_photo">
                    <img src={benoit} alt="BENOîT ROGNIER"/>
                </div>
                <h3 className="member_name">BENOîT ROGNIER</h3>
                <h6 className="member_designation">Chief Executive Officer</h6>
                <div className="social_section">
                    <a href="https://www.linkedin.com/">> LINKEDIN</a>
                    <a href="https://twitter.com/">> TWITTER</a>
                </div>
            </div>
            <div className="team_column">
                <div className="member_photo">
                    <img src={guillaume} alt="guillaume duhamel"/>
                </div>
                <h3 className="member_name">guillaume duhamel</h3>
                <h6 className="member_designation">Chief Technology Officer</h6>
                <div className="social_section">
                    <a href="https://www.linkedin.com/">> LINKEDIN</a>
                    <a href="https://twitter.com/">> TWITTER</a>
                </div>
            </div>
            <div className="team_column">
                <div className="member_photo">
                    <img src={debra}  alt="debra ford"/>
                </div>
                <h3 className="member_name">debra <br/>ford</h3>
                <h6 className="member_designation">Magna mollis vulputate </h6>
                <div className="social_section">
                    <a href="https://www.linkedin.com/">> LINKEDIN</a>
                    <a href="https://twitter.com/">> TWITTER</a>
                </div>
            </div>
            <div className="team_column">
                <div className="member_photo">
                    <img src={randy} alt="randy griffin"/>
                </div>
                <h3 className="member_name">randy griffin</h3>
                <h6 className="member_designation">Fringilla suscipit faucibus </h6>
                <div className="social_section">
                    <a href="https://www.linkedin.com/">> LINKEDIN</a>
                    <a href="https://twitter.com/">> TWITTER</a>
                </div>
            </div>
            <div className="team_column">
                <div className="member_photo"> 
                    <img src={brandon} alt="brandon mendoza"/>
                </div>
                <h3 className="member_name">brandon mendoza</h3>
                <h6 className="member_designation">Fermentum nullam </h6>
                <div className="social_section">
                    <a href="https://www.linkedin.com/">> LINKEDIN</a>
                    <a href="https://twitter.com/">> TWITTER</a>
                </div>
            </div>
        </div>
        </div>
    </div>
)
  
export default Team; 