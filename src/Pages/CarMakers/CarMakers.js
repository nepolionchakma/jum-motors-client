import React, { useState, useEffect } from 'react';

const CarMakers = () => {
    const [carMakers, setCarMakers] = useState([]);
    useEffect(() => {
        fetch("./CarMakers.json")
            .then(res => res.json())
            .then(data => setCarMakers(data))
    }, []);
    return (
        <div className="container">
            <div className="row m-0">
                {
                    carMakers.map(maker =>
                        <div
                            className="col-lg-2"
                            key={maker.name}
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