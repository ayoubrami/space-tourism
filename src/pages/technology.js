import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import Technologies from '../components/technologies';

const Technology = () => (
    <div className='bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover'>
        <Header pathname={window.location.pathname}/>
        <Technologies/>
        <Footer/>
    </div>
);
export default Technology;