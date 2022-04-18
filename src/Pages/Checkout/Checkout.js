import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Checkout.css'



const Checkout = () => {
    const { packageId } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === true) {
            event.stopPropagation();
            toast('Thanks for ordering')
        }
        setValidated(true);




    };


    return (
        <div className="container">
            <div><p className='text-center h5 mt-5'>You Choose: <span className='custom-clr'>{packageId} 🤩</span></p></div>
            <div className=' w-75 shadow-sm p-3 mb-5 bg-body rounded mx-auto'>
                <p className=' text-center mb-3'>Fill The Form , to Order✔️</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                placeholder={user?.email}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder={user ? user?.displayName : 'user'}
                                    disabled
                                    aria-describedby="inputGroupPrepend"
                                    
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="address" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text" placeholder="Number" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid number.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <button type="submit" className='custom-btn px-3 mx-auto d-block'>Confirm Order</button>
                </Form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Checkout;