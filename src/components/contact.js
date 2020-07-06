import React from 'react';

const Contact = () => (
    <div className="contact_section" id="contact"> 
        <div className="container_layout">
            <h2 className="title black_title">Contact us Here!</h2>
            <div className="contact_form">
                <form>
                    <div className="contact_form_row">
                        <input type="text" placeholder="Email" className="contact_input" />
                    </div>
                    <div className="contact_form_row">
                        <textarea defaultValue="Message"></textarea>
                    </div>
                    <div className="contact_form_row">
                        <input type="submit" value="contact us!" className="button" />
                    </div>
                </form>
            </div>
            <div className="mobile_button">
                <a href="https://google.com" className="button">contact us!</a>
            </div>
        </div>
    </div>
)
  
export default Contact; 