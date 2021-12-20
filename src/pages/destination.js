import React from 'react'
import Header from '../components/header';
import Destinations from  '../components/destinations'
import Footer from '../components/footer';

const Destination = () => (
    <div className='bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover'>
        <Header pathname={window.location.pathname}/>
        <Destinations/>
        <Footer/>
    </div>
);
export default Destination;