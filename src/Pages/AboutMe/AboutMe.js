import React from 'react';
import me from '../../images/About/me.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='d-flex justify-content-around container my-5 about-container'>
            <div className='w-50 mt-2 about-text'>
                <div>
                    <h1 className='display-1'>Hey!Its Me</h1>
                    <h1 className='display-3'>Life <span className='custom-clr'>Goals</span></h1>
                    <p className='font-weight-bold'>Wanted to take a bit of time of our users, i wanted to talk about my goals in my life. For the past 6 months i have been dedicated in being a web developer, i have worked day and night just to make my skills developed, I hope to continue working like this and be a great web developer in future. I Believe its just a matter of time until i achieve my goals, keep me in your prayers. Thank You For Reading This.</p>
                </div>
            </div>
            <div className='about-image'>
                <img src={me} alt="" />
            </div>

        </div>
    );
};

export default AboutMe;