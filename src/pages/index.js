import React from 'react'
import Header from '../components/header';
import { Link } from 'react-router-dom'
import Footer from '../components/footer';
const Home = () => {
    return (
        <div className='bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover h-full w-full'>
            <Header pathname={window.location.pathname}/>
            <div className='h-screen flex flex-wrap justify-center items-center mt-10'>
                <div className='flex-col justify-center lg:text-left text-center mb-20 lg:mb-0'>
                    <h5 className='font-heading tracking-wide text-secondary text-2xl mb-6'>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1 className='text-white font-body text-8xl mb-6'>SPACE</h1>
                    <p className='text-secondary font-heading leading-7 lg:text-left text-center text-sm mx-16 md:mx-52 lg:mx-0 lg:w-1/3'>
                        Let’s face it; if you want to go to space, you might as well 
                        genuinely go to outer space and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className=''>
                    <Link to='/destination'>
                        <button 
                            className='
                                font-body text-xl rounded-full bg-white p-20 w-48 h-48 
                                flex items-center justify-center text-center hover:ring-50
                                hover:ring-gray-600 hover:ring-opacity-50 transition hover:duration-700'
                        >
                            EXPLORE
                        </button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )}
export default Home;