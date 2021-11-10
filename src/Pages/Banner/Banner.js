import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import bg from "../../Images/bannerBg.jpg"
import bgp from "../../Images/bannerpic.jpg"

const Banner = () => {
    const bbg = {
        background: `url( ${bg})`,
        backgroundSize: "cover",
        padding: "150px 0",
    }
    return (
        <>
            <div style={bbg}>
                <Row className=" text-white justify-content-center m-0">
                    <Col xs={12} md={4}>
                        <img className="w-100 rounded" src={bgp} alt="" />
                    </Col>
                    <Col className="text-white text-start my-auto" xs={6}>
                        <h3 className="fw-bold">Best Car</h3>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tempore voluptatem nihil ratione inventore nemo ab! Voluptatem quidem tenetur maiores!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tempore voluptatem nihil ratione inventore nemo ab! Voluptatem quidem tenetur maiores!</p>
                        <Button>More</Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Banner;