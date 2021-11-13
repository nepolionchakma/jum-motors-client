import { Rating } from '@mui/material';
import React from 'react';
import useFireBase from '../../Hooks/useFireBase';

const ReviewsItems = () => {
    const { reviews } = useFireBase({})
    return (
        <div className="row m-0 py-5 ">
            <h2 className="my-4  fw-bold text-danger">Customer Review</h2>
            {
                reviews.map(review =>
                    <div
                        key={review._id}
                        className="col-lg-4 col-md-6 col-sm-6 col-12 "
                    >
                        <div className="shadow border p-3">
                            <div className=" p-2">
                                <h5 className="m-0 text-danger fw-bold">"{review.name}"</h5>
                            </div>

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