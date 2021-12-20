import React, { useState } from "react";
import logo from '../../assets/shared/logo.svg';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const Header = ({ pathname }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex items-center lg:pt-10 lg:py-4 '>
            <Link to='/' className="cursor-pointer ml-6 pt-4 lg:pt-0 ">
                <img alt='logo' src={logo}/>
            </Link>
            <div className='border-t ml-10 w-1/2 border-gray-400 invisible lg:visible'/>
            <div 
                className='px-50 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm hidden md:flex justify-evenly w-1/2'
            >        
                <Link 
                    className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/' ? 'border-b-2': null)}
                    to='/'
                >
                    <span className='font-bold pr-2 invisible lg:visible'>00</span>
                    <span>HOME</span>
                </Link>
                <Link 
                    className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/destination' ? 'border-b-2': null)}
                    to='/destination'
                >
                    <span className='font-bold pr-2 invisible lg:visible'>01</span>
                    <span>DESTINATION</span>
                </Link>
                <Link 
                    className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/crew' ? 'border-b-2': null)}
                    to='/crew'
                >
                    <span className='font-bold pr-2 invisible lg:visible'>02</span>
                    <span>CREW</span>
                </Link>
                <Link 
                    className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/technology' ? 'border-b-2': null)}
                    to='/technology'
                >
                    <span className='font-bold pr-2 invisible lg:visible'>03</span>
                    <span>TECHNOLOGY</span>
                </Link>
            </div>
            <div className="pt-4 md:hidden">
                {!isOpen && (<img alt="open-menu" src={hamburgerIcon} onClick={() => setIsOpen(!isOpen)}/>)}
                {isOpen && (
                    <div className="fixed top-0 right-0 bg-white bg-opacity-5 backdrop-filter backdrop-blur-md h-screen w-3/4 ">
                        <img alt="close-menu" src={closeIcon} onClick={() => setIsOpen(!isOpen)} className="fixed top-8 right-14" />
                        <div 
                            className='flex flex-col items-start justify-center pl-10 mt-20'
                        > 
                            <Link 
                                className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/' ? 'border-b-2': null)}
                                to='/'
                            >
                                <span className='font-bold pr-2'>00</span>
                                <span>HOME</span>
                            </Link>
                            <Link 
                                className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/destination' ? 'border-b-2': null)}
                                to='/destination'
                            >
                                <span className='font-bold pr-2'>01</span>
                                <span>DESTINATION</span>
                            </Link>
                            <Link 
                                className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/crew' ? 'border-b-2': null)}
                                to='/crew'
                            >
                                <span className='font-bold pr-2'>02</span>
                                <span>CREW</span>
                            </Link>
                            <Link 
                                className={cx('font-heading text-white py-6 hover:border-b-2 hover:border-gray-500',pathname ==='/technology' ? 'border-b-2': null)}
                                to='/technology'
                            >
                                <span className='font-bold pr-2'>03</span>
                                <span>TECHNOLOGY</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
)}

export default Header;