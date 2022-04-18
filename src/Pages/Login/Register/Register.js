import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "Invalid email" })
        }
    }
    const handlePass = (e) => {
        const passwordRegex = /.{8,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        }

        else {
            setUserInfo({ ...userInfo, password: "" })
            setErrors({ ...errors, password: "Minimum 8 Characters" })
        }
    }

    const handleConfirmPass = (e) => {
        if (userInfo.password === e.target.value) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "Passwords Dont Match" })
        }
    }

    console.log(userInfo.email)

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();

    if (user) {

        navigate('/', { replace: true });

    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='container py-2 my-5 shadow-lg p-3 mb-5 bg-body rounded w-50'>
            <h2 className='py-3'>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" required onChange={handleEmail} />
                    {errors?.email && <p className='text-danger'>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required onChange={handlePass} />
                    {errors?.password && <p className='text-danger'>{errors.password}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">

                    <Form.Control type="password" placeholder="Confirm Password" onChange={handleConfirmPass} />
                </Form.Group>
                {hookError && <p className='text-danger'>{hookError.message}</p>}

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <p>Already Have an account? <Link className='text-decoration-none text-info' to='/login'>Login</Link></p>
                <button className='custom-btn  px-3 mx-auto d-block'>Register</button>

            </Form>
            <SocialLogin></SocialLogin>
        </div>


    );
};

export default Register;