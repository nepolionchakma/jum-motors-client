import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFly, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faGasPump, faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';
import "./ChooseUs.css"

const ChooseUs = () => {
    return (
        <div className="container  py-5">
            <h3 className="my-5 fw-bold text-danger">Why Choose Us</h3>
            <div className="row m-0">
                <div className="col-lg-3">
                    <div className="row">
                        <div className="">
                            <FontAwesomeIcon className="text-danger fs-1" icon={faPlaceOfWorship} />
                            <p>FINANCING MADE EASY</p>
                        </div>
                        <div className="">
                            <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="">
                            <FontAwesomeIcon className="text-danger fs-1" icon={faFly} />
                            <p>WIDE RANGE OF BRANDS</p>
                        </div>
                        <div className="">
                            <p>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="">
                            <FontAwesomeIcon className="text-danger fs-1" icon={faLaravel} />
                            <p>TRUSTED BY THOUSANDS</p>
                        </div>
                        <div className="">
                            <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="">
                            <FontAwesomeIcon className="text-danger fs-1" icon={faGasPump} />
                            <p>CAR SERVICE & MAINTENANCE</p>
                        </div>
                        <div className="">
                            <p> Our service department maintain your car to stay safe on the road for many more years.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};




export default ChooseUs;