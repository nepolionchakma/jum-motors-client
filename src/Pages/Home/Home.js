import React from 'react';
import Menu from '../../Shared/Menu/Menu';
import Banner from '../Banner/Banner';
import CarMakers from '../CarMakers/CarMakers';
import ChooseUs from '../ChooseUs/ChooseUs';
import ClientViews from '../ClientViews/ClientViews';
import Products from '../Products/Products';
import ReviewsItems from '../ReviewsItems/ReviewsItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CarMakers></CarMakers>
            <ClientViews></ClientViews>
            <ChooseUs></ChooseUs>
            <ReviewsItems></ReviewsItems>
        </div>
    );
};

export default Home;