import React, { useState, useEffect } from 'react';

const CarMakers = () => {
    const [carMakers, setCarMakers] = useState([]);
    useEffect(() => {
        fetch("./CarMakers.json")
            .then(res => res.json())
            .then(data => setCarMakers(data))
    }, []);
    return (
        <div className="container my-5">
            <h3 className="my-5  text-danger fw-bold">Cars Makers</h3>
            <div className="row m-0 my-4">
                {
                    carMakers.map(maker =>
                        <div
                            className="col-lg-2 col-md-2 col-sm-3 col-4 border"
                            key={maker.id}
                        >
                            <img className="w-100" src={maker.img} alt="" />
                            <p>{maker.maker}({maker.items})</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CarMakers;