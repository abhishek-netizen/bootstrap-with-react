import React from 'react';
import Common from './Common';
import web from '../src/images/hero.svg';
const About = ()=>{ 
    return(
        <>
            <Common 
            name="Welcome to About page" 
            imgsrc={web} 
            visit='/contact' 
            btname="Contact Now"
            />
        </>
    )
}

export default About;