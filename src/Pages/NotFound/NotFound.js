import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    const handleNotFound = () => {
        navigate('/')
    }
    return (
        <div className='my-5'>
            <div className='d-flex justify-content-center notfound-image'>
                <img src={notfound} alt="" />
            </div>

            <div className='mb-5 notfound-button'>
                <button onClick={handleNotFound} className='btn btn-success text-white mx-auto d-block'><small>Go Home</small></button>
            </div>

        </div>
    );
};

export default NotFound;