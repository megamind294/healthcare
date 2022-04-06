import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavbarHome } from '../components/NavbarHome';
import '../assets/css/homepage.css';
import { GoPencil } from "react-icons/go";
import BodyStructureIcon from '../assets/icons/body-structure.svg';
import HistoryIcon from '../assets/icons/history.svg';
import MedicalConditionIcon from '../assets/icons/medical-condition.svg';
import SignsIcon from '../assets/icons/signs.svg';
import TimeSinceIcon from '../assets/icons/time-since.svg';
import MedicationIcon from '../assets/icons/medication.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <NavbarHome />
    <Container fluid className='pb-4'>
        <Row>
            <Col md={12} xs={12} className="text-end">
                <div className='pagination'>
                    <Link className='page-item active' to="/home">1</Link>
                    <Link className='page-item' to="/userdata">2</Link>
                </div>
            </Col>
            <Col md={3} xs={12}>
                <div className='user-card'>
                    <div className='user-shortname'>RJ</div>
                    <div className='user-info text-center pt-2'>
                        <h6>Riya Jain</h6>
                        <p>Age: 26 | Female <GoPencil style={{marginLeft: "5px"}}/></p>
                    </div>
                    <div className='user-card-info'>
                        <Row className='pt-4'>
                            <Col xs={10}><img className='icons' src={MedicalConditionIcon} alt="icon"></img> Medical Condition</Col>
                            <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                        </Row>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.
                        </p>
                    </div>
                </div>
            </Col>
            <Col md={6} xs={12}>
                <Row>
                    <Col md={12} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={BodyStructureIcon} alt="icon"></img>  Body structure and Direction Affected</Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={SignsIcon} alt="icon"></img>  Signs and Symptoms</Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={MedicationIcon} alt="icon"></img>  Medication</Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={TimeSinceIcon} alt="icon"></img> Time Since Symptoms Started</Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col md={3} xs={12}>
                <Row>
                    <Col xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={MedicationIcon} alt="icon"></img> Medication</Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            <br /><br/> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nost
                            <br /><br/>  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nost
                            </p>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={HistoryIcon} alt="icon"></img> Medical History</Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <div className='medical-history'>
                                <div><span className='span1'>Surgery</span> <span className='span2'>Yes/<b>No</b></span></div>
                                <div><span className='span1'>Asthma</span> <span className='span2'>Yes/<b>No</b></span></div>
                                <div><span className='span1'>Bleeding</span> <span className='span2'>Yes/<b>No</b></span></div>
                                <div><span className='span1'>Surgery</span> <span className='span2'>Yes/<b>No</b></span></div>
                                <div><span className='span1'>Surgery</span> <span className='span2'>Yes/<b>No</b></span></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default HomePage