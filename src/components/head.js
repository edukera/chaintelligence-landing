import React from 'react';
import Nav from './nav';
import Banner from './banner';


const Head = () => (
    <header className="header"> 
        <div className="container_layout">
            <Nav/>
            <Banner/>
        </div>
    </header>
) 
   
export default Head;