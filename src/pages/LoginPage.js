import React from 'react';
import GoogleIcon from '../assets/google-icon.svg';
import { Row, Col, Form } from 'react-bootstrap';
import { LoginRegLeftSide } from '../components/LoginRegLeftSide';
import '../assets/css/loginreg.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const LoginPage = () => {
    let navigate = useNavigate();
    const LoginButton = () =>{
        navigate('/home');
    }
  return (
    <>
        <div className='loginbody'>
            <Row>
                <Col md={6} xs={12}><LoginRegLeftSide /></Col>
                <Col md={6} xs={12}>
                    <div className='login-form'>
                        <h2>Sign in</h2>
                        <p className='text'>Log in to your Account with Username or with your<br></br> registered Gmail id</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                <Form.Text className='forgot-password'>
                                Forgot Password?
                                </Form.Text>
                            </Form.Group>
                            <button className='login-btn' type='button' onClick={()=>LoginButton()}>
                                Log In
                            </button>
                            <p className='text-muted text-center or-text pt-2'>or</p>
                            <button className='google-btn'>
                                <img src={GoogleIcon} alt="GoogleIcon" />Sign in with Google
                            </button>
                            <p className='text-muted text-center py-2'>Don't have an account? <Link className='register-text' to="/register">Sign up</Link></p>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default LoginPage