import React from 'react';
import technologyGraph from '../assets/images/technology_graph.png';
import archetype from '../assets/images/archetype.svg';

const Techonology = () => (
    <div className="techonology_section" id="technology"> 
        <div className="container_layout">
            <h2 className="title white_title">Technology</h2>
            <div className="technology_block">
                <div className="technology_left_block">   
                    <div className="technology_column">
                        <h3 className="subTitle">Digital Asset Explorer</h3>
                        <div className="technology_item">
                            <div className="technology_row">
                                <h5>Lorem Ipsum</h5>
                                <p>Nulla quis sem at nibh <a href="https://google.com">elementum</a> imperdiet.</p>
                            </div>
                            <div className="technology_row">
                                <h5>Suspendisse</h5>
                                <p>Etiam ultrices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="technology_column">
                        <h3 className="subTitle">Archetype</h3>
                        <div className="technology_item">
                            <div className="technology_row">
                                <h5>Quisque Volutpat Condimentum Velit</h5>
                                <p>Tortor neque adipiscing diam, a cursus ipsum ante quis turpis</p>
                            </div>
                            <div className="technology_row">
                                <h5>Sed Convallis</h5>
                                <span className="tech_logo"><img src={archetype} alt="Archetype"/></span>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="technology_column">
                    <div className="technology_graph">
                        <img src={technologyGraph} alt="graph"/>
                    </div>
                </div>
        </div>
        </div>
    </div>
)
  
export default Techonology;