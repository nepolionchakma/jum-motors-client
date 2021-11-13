import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Menu = () => {

    const { user, handleSignOut } = useAuth();

    return (
        <div className="sticky-top ">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold" as={HashLink} to="/home">JUM <span className="text-danger fw-bold">M</span>OTORS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="fw-bold" as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link className="fw-bold" as={HashLink} to="/cars">Cars</Nav.Link>
                            <Nav.Link className="fw-bold" as={HashLink} to="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link className="fw-bold" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="me-auto">
                                <div className="me-auto p-2">
                                    {!user?.displayName ?
                                        <div className="align-items-center mx-auto">
                                            <Link className="px-1 fw-bold jum-text p-2 ms-2" to="/login">Login</Link>
                                            <Link className="px-1 fw-bold jum-text p-2" to="/signup">Signup</Link>
                                        </div> :
                                        <div className="d-flex justify-content-evenly align-items-center">
                                            <span className="">Hi,{user.displayName}</span>
                                            <img
                                                style={{
                                                    width: '30px',
                                                    borderRadius: '50%',
                                                    margin: '0px 5px'
                                                }}
                                                src={user.photoURL} alt="" />
                                            <button onClick={handleSignOut} className="btn btn-danger p-1">SignOut</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;