import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../../Images/bannerBg.jpg"
import bgp from "../../Images/bannerpic.jpg"

const Banner = () => {
    const bbg = {
        background: `url( ${bg})`,
        backgroundSize: "cover",
        padding: "100px 0",
    }
    return (
        <>
            <div style={bbg}>
                <div className="container">
                    <div className="row text-white justify-content-center m-0 mx-auto">
                        <div className="col-lg-4 col-md-5 col-sm-12 col-12 my-auto">
                            <img className="w-100 rounded my-2" src={bgp} alt="" />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 text-white text-start my-auto">
                            <h3 className="fw-bold">Automakers split on how fast to deploy automatic braking</h3>
                            <p className="my-2">
                                We believe the cars we offer are the highest quality.
                                The 2022 Toyota Avalon's #1 ranking is based on its score within the Large Cars category. Currently the Toyota Avalon has a score of 8.3 out of 10, which is based on our evaluation of 20 pieces of research and data elements using various sources.
                            </p>
                            <Link className="btn btn-danger" to="/cars">For More</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;