import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Menu = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">JUM MOTORS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                            <Nav.Link as={HashLink} to="/signup">SignUp</Nav.Link>
                            <Nav.Link as={HashLink} to="/manage-products">Add Product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-flex justify-content-evenly mx-auto p-2">
                        {!user?.displayName ?
                            <div className="d-flex align-items-center mx-auto">
                                <Link className="px-1 jum-text p-2 ms-2" to="/login">Login</Link>
                                <Link className="px-1 jum-text p-2" to="/signup">Signup</Link>
                            </div> :
                            <div className="mx-2 mx-auto">
                                <span className="text-white">Hi,{user.displayName}</span>
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
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;