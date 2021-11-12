import { Rating } from '@mui/material';
import React from 'react';
import useFireBase from '../../Hooks/useFireBase';

const ReviewsItems = () => {
    const { reviews } = useFireBase({})
    return (
        <div className="row m-0 container py-5">
            <h2>Customer Review</h2>
            {
                reviews.map(review =>
                    <div
                        key={review._id}
                        className="col-lg-3 "
                    >
                        <div className="shadow border">
                            <p>{review.name}</p>
                            <p>{review.email}</p>
                            <p className="limit-4">{review.message}</p>
                            <Rating name="half-rating-read" defaultValue={review.rate} precision={0.5} readOnly />
                            <p></p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ReviewsItems;