import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

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



    console.log(userInfo.email)

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);


    return (
        <div className='container py-2 my-5 shadow-lg p-3 mb-5 bg-body rounded '>
            <h2 className='py-3'>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" required onChange={handleEmail} />
                    {errors?.email && <p className='text-danger'>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required onChange={handlePass} />
                    {errors?.password && <p className='text-danger'>{errors.password}</p>}
                </Form.Group>
                {hookError && <p className='text-danger'>{hookError.message}</p>}

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <p>Dont have an account? <Link className='text-decoration-none text-info' to='/register'>Register</Link></p>
                <button className='custom-btn  px-3 mx-auto d-block'>Login</button>

            </Form>

        </div>
    );
};

export default Login; 