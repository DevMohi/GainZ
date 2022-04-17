import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { images, name, description, id } = service;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <div>
                    <div className='d-flex justify-content-around'>
                        <img src={images} alt="" />
                        <p className='h1'><span style={{ color: "#b0192e" }}>0{id}</span></p>
                    </div>
                    <div className='text-center mt-3'>
                        <h4> {name} </h4>
                        <p className='font-weight-bold h6'>{description}</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <button className='custom-btn'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;