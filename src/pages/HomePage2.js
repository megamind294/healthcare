import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavbarHome } from '../components/NavbarHome';
import '../assets/css/homepage.css';
import { GoPencil } from "react-icons/go";
import HistoryIcon from '../assets/icons/history.svg';
import TimeIcon from '../assets/icons/time-icon.svg';
import NextVisitIcon from '../assets/icons/next-visit.svg';
import DownloadIcon from '../assets/icons/download-icon.svg';
import { Link } from 'react-router-dom';
import Pdf from '../assets/Smallpdf.pdf';
import pdflogo from '../assets/icons/pdf1.svg';

const HomePage2 = () => {
    return (
        <>
            <NavbarHome />
            <Container fluid className='pb-4'>
                <Row>
                    <Col md={12} xs={12} className="text-end">
                        <div className='pagination'>
                            <Link className='page-item' to="/home">1</Link>
                            <Link className='page-item active' to="/userdata">2</Link>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={HistoryIcon} alt="icon"></img> <span>Personal History</span></Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <div className='insider'>
                                <div><span className='span1'>Smoking</span> <span className='span2'>Yes/<b>No</b></span></div>
                                <div><span className='span1'>Drinking</span> <span className='span2'>Yes/<b>No</b></span></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={TimeIcon} alt="icon"></img> <span>Time of Examination</span></Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            </p>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt"><img className='icons' src={NextVisitIcon} alt="icon"></img> <span>Next Visit</span></Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            </p>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className='medical-cards'>
                            <Row>
                                <Col xs={10} className="heading-txt2"><img className='icons' src={DownloadIcon} alt="icon"></img> <span>Download Report</span></Col>
                                <Col xs={2} className="text-end edit-icon"><GoPencil /></Col>
                            </Row>
                            <div className="pdf">
                                <img src={pdflogo}  />
                                <a href={Pdf} target="_blank">Results Riya__Root Report_download20-04-2022</a>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default HomePage2