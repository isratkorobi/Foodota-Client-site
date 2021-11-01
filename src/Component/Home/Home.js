import React from 'react';
import AdditionalSection from '../AdditionalSection/AdditionalSection';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import Footer from '../Footer/Footer';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Offers></Offers>
           <Delivery></Delivery>
           <AdditionalSection></AdditionalSection>
           <Footer></Footer>
        </div>
    );
};

export default Home;
