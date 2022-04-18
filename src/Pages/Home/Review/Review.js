import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { id, img, name, rating, desc } = review;
    console.log(review)
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <div>
                    <div className='d-flex justify-content-center review-container'>
                        <img src={img} alt="" />

                    </div>
                    <div className='text-center mt-3'>
                        <h4> {name} </h4>
                        <p className='font-weight-bold h6'><q>{desc}</q></p>
                        <small>{rating}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;