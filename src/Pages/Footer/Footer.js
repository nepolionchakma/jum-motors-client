import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footerCSS text-danger">
            <div className=" m-0 text-start">
                <hr />
                <div className=" m-0 row p-5 ">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 my-2 col-md-6 col-sm-6 col-12 my-2 text-danger">
                        <h3>Need Help</h3>
                        <hr />
                        <Link to="" className="d-block text-decoration-none text-white">Call Us</Link>
                        <a className="text-white" href="tel:+8801698456444">+8801698456444</a>
                        <Link to="" className="d-block text-white text-decoration-none">Email For Us</Link>
                        <a className="text-white" href="email:jum.motors@gmail.com">jum.motors@gmail.com</a>
                        <Link to="" className="d-block text-white text-decoration-none">Follow Us</Link>
                        <div className="myIcon">
                            <FontAwesomeIcon className="text-danger mx-2" icon={faFacebook} />
                            <FontAwesomeIcon className="text-danger mx-2" icon={faTwitter} />
                            <FontAwesomeIcon className="text-danger mx-2" icon={faInstagram} />
                            <FontAwesomeIcon className="text-danger mx-2" icon={faLinkedin} />
                            <FontAwesomeIcon className="text-danger mx-2" icon={faPhoneVolume} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 my-2">
                        <h3>Company</h3>
                        <hr />
                        <Link to="" className="d-block text-white text-decoration-none">About Us</Link>
                        <Link to="" className="d-block text-white text-decoration-none">Our Blog</Link>
                        <Link to="" className="d-block text-white text-decoration-none">Rewards</Link>
                        <Link to="" className="d-block text-white text-decoration-none">Our Team</Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 my-2">
                        <h3>Info</h3>
                        <hr />
                        <Link to="" className="d-block text-white text-decoration-none">Account</Link>
                        <Link to="" className="d-block text-white text-decoration-none">Legal</Link>
                        <Link to="" className="d-block text-white text-decoration-none">Contact</Link>


                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 my-2">
                        <h3>Support</h3>
                        <hr />
                        <Link to="" className="d-block text-white text-decoration-none">Affiliate Program</Link>
                        <Link to="" className="d-block text-white text-decoration-none">Privacy Policy</Link>
                    </div>
                </div>
                <hr />
                <div className="text-center py-3">
                    <p>All Reserved By<Link to="/" className=" text-decoration-none"> &copy;JUM MOTORS </Link>2021</p>

                </div>
            </div>
        </div >
    );
};

export default Footer;