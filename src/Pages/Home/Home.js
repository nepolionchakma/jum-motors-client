import React from 'react';

import Banner from '../Banner/Banner';
import CarMakers from '../CarMakers/CarMakers';
import ChooseUs from '../ChooseUs/ChooseUs';
import ClientViews from '../ClientViews/ClientViews';
import Products from '../Products/Products';
import ReviewsItems from '../ReviewsItems/ReviewsItems';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CarMakers></CarMakers>
            <ClientViews></ClientViews>
            <ChooseUs></ChooseUs>
            <ReviewsItems></ReviewsItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;