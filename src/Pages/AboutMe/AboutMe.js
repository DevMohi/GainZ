import React from 'react';
import me from '../../images/About/me.png'
import './AboutMe.css'
import github from '../../images/icons/github.png'
import instagram from '../../images/icons/instagram.png'
import linkedin from '../../images/icons/linkedin.png'

const AboutMe = () => {
    return (
        <div className='d-flex justify-content-around container my-5 about-container align-items-center'>
            <div className='w-50 mt-2 about-text'>
                <div >
                    <h1 className='display-1'>I Am Mohiuddin</h1>
                    <h1 className='display-3'>Life <span className='custom-clr'>Goals</span></h1>

                    <p className='font-weight-bold'>Wanted to take a bit of time of our users, i wanted to talk about my goals in my life. For the past 6 months i have been dedicated in being a web developer, i have worked day and night just to make my skills developed, I hope to continue working like this and be a great web developer in future. I Believe its just a matter of time until i achieve my goals, keep me in your prayers. Thank You For Reading This.</p>

                    <div className='icons-container'>
                        <a href="https://github.com/DevMohi" target='_blank'><img className='pe-2' src={github} alt="" /></a>
                        <a href="https://www.instagram.com/mohi_uddin8/?hl=en" target='_blank'><img className='px-2' src={instagram} alt="" /></a>
                        <a href="https://www.linkedin.com/in/mohammed-mohi-uddin-654412220/" target='_blank'><img className='px-2' src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='about-image'>
                <img src={me} alt="" />
            </div>

        </div>
    );
};

export default AboutMe;