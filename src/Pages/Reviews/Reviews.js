import { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Alert } from '@mui/material';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};



const Reviews = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const initialInfo = { name: user.displayName, email: user.email, message: "" };
    const [review, setReview] = useState(initialInfo);

    // Rating
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    // console.log(value)


    const handleOnBlur = e => {
        const field = e.target.name;
        const inputValue = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = inputValue;
        // console.log(newInfo)
        setReview(newInfo);
    }

    const handleOrdersDataSubmit = e => {
        // alert("Place Order SuccessFull");

        // data 
        const orderItem = {
            ...review,
            rate: value,
            message: review.message,

        }
        // send data 
        fetch("https://secure-lowlands-87242.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderItem)
        })
            .then()
        setSuccess(true);

        // console.log(iteorderItemm)
        e.preventDefault();
    }

    return (
        <div>
            <Container>
                <h4 className="my-3 fw-bold">Product Review</h4>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="rate"
                        value={value}
                        onBlur={handleOnBlur}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                </Box>
                <form onSubmit={handleOrdersDataSubmit}>
                    <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="name" id="" defaultValue={user.displayName} disabled />
                    <br />
                    <input className="w-100 my-1" onBlur={handleOnBlur} type="text" name="email" id="" defaultValue={user.email} disabled />
                    <br />
                    <textarea className="w-100 my-1" onBlur={handleOnBlur} type="text" name="message" id="" placeholder="Message" />
                    <br />
                    <input type="submit" value="Review Submit" />
                </form>
            </Container>
            {success && <Alert className="my-4" severity="success">Product Review successfully</Alert>}
        </div>
    );
};

export default Reviews;