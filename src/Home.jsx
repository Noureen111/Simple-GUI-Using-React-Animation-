import React from 'react';
import web from './images/img1.png';
import Common from './Common.jsx'


function Home() {
    return (
        <Common name="Grow your business with"
                imgsrc={web} 
                visit="/services"
                btname="Get Started"
        />
    )
}

export default Home;