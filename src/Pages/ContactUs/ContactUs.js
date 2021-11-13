import React from 'react';
import Footer from '../Footer/Footer';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className="contact-container row m-0 mx-auto align-items-center">

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-color mt-5 p-2">
                <div className="s mx-auto">
                    <img className="w-100" src="https://i.ibb.co/Q83NgVD/contactus.png" alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 py-2 px-5">
                <h3 className="fw-bold text-success fs-2 p-5 text-danger">Contact Us</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-white fw-bold">Name</label>
                    <div className="col-sm-10">
                        <input placeholder="Name" type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white fw-bold">Email</label>
                    <div className="col-sm-10">
                        <input placeholder="Email" type="email" className="form-control" id="" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white fw-bold">Phone</label>
                    <div className="col-sm-10">
                        <input placeholder="number" type="number" className="form-control" id="" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-white fw-bold">Message</label>
                    <div className="col-sm-10">
                        <textarea cols="30" rows="2" placeholder="Message" type="text" className="form-control" id="" />
                    </div>
                </div>
                <button className="btn btn-danger py-2 px-4" type="submit">Send</button>
            </div>
            {/* <div className="col-3 col-md-1"></div> */}
            <Footer></Footer>
        </div >
    );
};

export default ContactUs;