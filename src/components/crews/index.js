import React,{ useState } from 'react';
import data from '../../data/data.json';
import cx  from 'classnames';

const Crews = () => {
    const [staff, setStaff] = useState(data['crew'][0]);
    return (
        <>
            <div 
                className='font-heading flex mt-10 p-4 justify-center md:justify-start container mx-auto text-xl tracking-widest'
            >
                <span className='text-gray-500 font-bold md:ml-8'>02</span>
                <h1 className='text-white ml-4 tracking-widest'>MEET YOUR CREW</h1>
            </div>
            <div className='container mx-auto mt-4 flex flex-wrap-reverse md:flex-wrap justify-center items-center h-screen'>
                <div className='flex flex-col lg:text-left  mx-10 md:mx-40 lg:mx-0'>
                    <h1 className='text-gray-500 text-3xl font-body mb-4'>{staff.role}</h1>
                    <h1 className='text-white text-5xl font-body mb-8'>{staff.name}</h1>
                    <p className='font-heading text-secondary leading-loose lg:w-96'>{staff.bio}</p>
                    <div className='flex md:mt-12 order-first md:order-none justify-center lg:justify-start mb-12'>
                        {data['crew'].map((crew, i) => (
                            <div 
                                key={i} 
                                className={cx('rounded-full h-3 w-3 mr-3 cursor-pointer hover:bg-gray-400',staff.name === crew.name ? 'bg-white' : 'bg-gray-500')} 
                                onClick={() => setStaff(crew)}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col lg:flex-1 items-center md:mx-56'>
                    <img alt='staff' src={staff.img} className='w-60 h-60 md:w-80 md:h-80 lg:w-auto lg:h-auto'/>
                    <div className='border-t w-80 md:w-0 border-gray-600 visible md:invisible'/>

                </div>
            </div>
        </>
    );
}
export default Crews;