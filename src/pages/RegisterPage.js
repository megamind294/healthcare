import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { LoginRegLeftSide } from '../components/LoginRegLeftSide';
import '../assets/css/loginreg.css';

const RegisterPage = () => {
  return (
    <>
        <div className='loginbody'>
            <Row>
                <Col md={6} xs={12}><LoginRegLeftSide /></Col>
                <Col md={6} xs={12}>
                    <div className='login-form'>
                        <h2>Sign up</h2>
                        <p className='text'>Give us some of your information to get few access <br></br> to field</p>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 checkbox-form" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" />
                                <Form.Text className='agree-text'>
                                By clicking the button above, you agree to our <span>Terms of use</span> and <span>privacy policies</span>
                                </Form.Text>
                            </Form.Group>
                            <button className='login-btn'>
                                Create account
                            </button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default RegisterPage