import React from 'react';
import Common from './Common.jsx';
import web from './images/img1.png';

function About(){
    return (
        <Common name="Welcome to About"
                imgsrc={web} 
                visit="/contact"
                btname="contact US"
        />
    )
}

export default About;