import React from 'react';
import google from '../../../images/icons/google.png'
import github from '../../../images/icons/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css'
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    if (user1 || user) {
        navigate('/')
        console.log('logged in')
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='bg-dark w-25'></div>
                <div className='px-3 pb-1'>or</div>
                <div style={{ height: "1px" }} className='bg-dark w-25'></div>
            </div>

            {/* for buttons  */}

            <div className='py-2'>
                <button className='p-1 btn btn-outline-dark mx-auto d-block '>
                    <img src={google} alt="" />
                    <span className='px-2' onClick={() => { signInWithGoogle() }}>Sign in with Google</span>
                </button>
            </div>
            <div className='py-2 mb-2'>
                <button className='p-1 btn btn-outline-dark mx-auto d-block'>
                    <img src={github} alt="" />
                    <span className='px-2' onClick={() => signInWithGithub()} >Sign in with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;