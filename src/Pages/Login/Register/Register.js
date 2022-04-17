import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        setUserInfo({ ...userInfo, email: e.target.value })
    }
    const handlePass = (e) => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }

    const handleConfirmPass = (e) => {
        setUserInfo({ ...userInfo, confirmPass: e.target.value })
    }

    console.log(userInfo.email)

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    if (user) {
        console.log('user ache')
    }
    return (
        <div className='container py-2'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onBlur={handleEmail} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onBlur={handlePass} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onBlur={handleConfirmPass} />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <button className='custom-btn  px-3 mx-auto d-block'>Register</button>

            </Form>
        </div>
    );
};

export default Register;