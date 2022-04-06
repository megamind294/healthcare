import React from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import '../assets/css/header.css';
import { Link } from 'react-router-dom';

export const NavbarHome = () => {
  return (
    <>
    <Navbar className='header-nav'>
        <Container>
            <Row className='w-100 text-light'>
                <Col xs={12} className="text-end">
                  <div className='d-inline-flex'>
                    <div className='username'>RJ</div>
                    <Link to="/" className='logout-text'>Logout</Link>
                  </div>
                  
                </Col>
            </Row>
        </Container>
    </Navbar>
    </>
  )
}
