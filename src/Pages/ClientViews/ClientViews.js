import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";


const ClientViews = () => {

    return (
        <div className="p-5 chooseBG workingExperiences bg-warning">
            <h1 className="customFont  text-white fw-bold">Client Views</h1>
            <div className="row m-0 justify-content-evenly py-5">

                <div className="col-lg-2 col-md-2 col-sm-6 col-6 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={15982} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <ReactVisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </ReactVisibilitySensor>
                            )}
                        </CountUp>+
                    </div>
                    <h5>CARS FOR SALE</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={1419} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <ReactVisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </ReactVisibilitySensor>
                            )}
                        </CountUp>K
                    </div>
                    <h5>VISITORS PER DAY</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={10247} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <ReactVisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </ReactVisibilitySensor>
                            )}
                        </CountUp>+
                    </div>
                    <h5>DEALER REVIEWS</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={10111} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <ReactVisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </ReactVisibilitySensor>
                            )}
                        </CountUp>+
                    </div>
                    <h5>VERIFIED DEALERS</h5>
                </div>

            </div>
        </div>
    );
};

export default ClientViews;