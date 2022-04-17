import React from 'react';
import './Footer.css'
import google from '../../../images/icons/google.png'
import instagram from '../../../images/icons/instagram.png'
import github from '../../../images/icons/github.png'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container '>
            <div class="container ">
                <div class="row">
                    <div class="col text-white">
                        <div className='d-flex justify-content-center py-3'>
                            <h4>Gains💪</h4>
                        </div>
                    </div>
                    <div class="col-5 text-white">
                        <div className='d-flex justify-content-center py-3'>
                            <img className='px-3' src={google} alt="" />
                            <img className='px-3' src={instagram} alt="" />
                            <img className='px-3' src={github} alt="" />
                        </div>
                    </div>
                    <div class="col text-white">
                        <div className='d-flex justify-content-center py-3'>
                            <p className='text-white'> &#169;{year} Gains, All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;