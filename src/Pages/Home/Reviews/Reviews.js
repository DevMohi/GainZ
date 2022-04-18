import React from 'react';
import Review from '../Review/Review';

const reviews = [
    {
        "id": "624b68484322075f12b7caab",
        "name": "Leanne Figueroa",
        "img": "https://randomuser.me/api/portraits/men/75.jpg",
        "rating": "⭐⭐⭐⭐⭐",
        "desc": "If you are a fan of getting trained by the best this gym should be in your list as it is ."
    },
    {
        "id": "624b6848ac9cfa0556e7c70b",
        "name": "Ronda Alford",
        "img": "https://randomuser.me/api/portraits/men/78.jpg",
        "rating": "⭐⭐⭐⭐",
        "desc": "I have joined several gyms before, but this gym helped me grow my confidence and my body too"

    },
    {
        "id": "624b68487d9878c2c6d10cf2",
        "name": "Britt Witt",
        "img": "https://randomuser.me/api/portraits/men/88.jpg",
        "rating": "⭐⭐⭐⭐",
        "desc": "I would like to appreciate the coach for constanly avoiding my nagging and help me out regardless"

    },
]

const Reviews = () => {
    return (
        <div className='container my-5'>
            <h1 className='custom-clr display-5 text-center'>Testimonials!</h1>
            <div className="row">
                {
                    reviews.map(review => <Review
                        key={review.id} review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;