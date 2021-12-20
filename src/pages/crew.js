import React from 'react'
import Crews from '../components/crews';
import Footer from '../components/footer';
import Header from '../components/header';

const Crew = () => (
    <div className='bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover'>
        <Header pathname={window.location.pathname}/>
        <Crews/>
        <Footer/>
    </div>
);
export default Crew;