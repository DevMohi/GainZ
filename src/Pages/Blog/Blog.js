import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container w-75 my-5'>
            <h1 className='text-center'>FAQ</h1>
            <Accordion className='py-2 mb-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header ><p>
                        Difference between Authorization and Authentication
                    </p></Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Web security systems are based on two-step process. The first step is authentication, it is the process of verifying an users identity. The Second Step is Authorization, it is the process of verifying what specific application,files and data a user has access to.
                            Some Differences : Authentication is visible and patially changeable by the user, whereas Authorization isnt visible or changeable by the user.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><p>
                        Why are you using firebase? What other options do you have to implement authentication?
                    </p></Accordion.Header>
                    <Accordion.Body>
                        <p>Google Firebase offers plethora of features, it is a go to backend development tool both for web and mobile apps. Further, it reduces the development workload and time, also its simple, lightweight, friendly and industrially recognized.All this helps developers enhance their apps based on demands.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><p>
                        What other services does firebase provide other than authentication
                    </p></Accordion.Header>
                    <Accordion.Body>
                        <p>There are many Services that Firebase provides beside authentication.For Example:
                            <ul>
                                <li>Cloud Firestore</li>
                                <li>Hosting</li>
                                <li>Cloud Storage</li>
                                <li>Cloud Functions</li>
                                <li>Crash Reports</li>
                                <li>Create Application without Backend Server</li>
                            </ul>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;