import React,{ useState } from 'react'
import data from '../../data/data.json'
import cx from 'classnames'


const Destinations = () => {
    const [planet, setPlanet] = useState(data['destination'][0])
    return (
        <>
            <div 
                className='container font-heading flex mt-10 justify-center md:justify-start mx-auto text-xl tracking-widest'
            >
                <span className='text-gray-500 font-bold ml-0 md:ml-8'>01</span>
                <h1 className='text-white ml-4 tracking-widest'>PICK YOUR DESTINATION</h1>
            </div>
            <div className='container mx-auto mt-4 flex flex-wrap flex-row h-screen justify-center items-center'>
                <div className='flex-auto mb-8 mx-16 md:mx-56 lg:mx-0'>
                    <img alt='moon' src={planet.img} className='w-60 h-60 md:w-80 md:h-80 lg:w-auto lg:h-auto'/>
                </div>
                <div className='flex-auto justify-center items-center '>
                    <div className='text-center lg:text-left p-px'>
                        {data['destination'].map( (destination, i) => (
                            <span 
                                key={i}
                                className={
                                    cx('text-secondary text-lg px-4 py-2 font-heading cursor-pointer hover:border-b-2 hover:border-gray-500',destination.name === planet.name ? 'border-b-2': null)
                                }
                                onClick={() => setPlanet(destination)}
                            >
                                {destination.name}
                            </span>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start mt-6'>
                        <h1 className='text-white font-body text-6xl lg:text-8xl md:text-7xl text-center lg:text-left p-2'>{planet.name}</h1>
                        <p className='text-secondary font-heading leading-relaxed text-center lg:text-left p-2 w-3/4 md:w-2/3 lg:w-96'>{planet.description}</p>
                        <div className='border-t my-6 w-3/4 lg:w-96 border-gray-500 border-opacity-50'/>
                        <div className='flex flex-col md:flex-row lg:justify-between md:justify-evenly lg:justify-start w-3/4 lg:w-96 mb-8'>
                            <div className='flex flex-col items-center lg:items-start mb-8'>
                                <span className='text-secondary font-heading text-sm tracking-widest'>AVG. DISTANCE</span>
                                <span className='text-white text-2xl font-body'>{planet.distance}</span>
                            </div>
                            <div className='flex flex-col items-center lg:items-start'>
                                <span className='text-secondary font-heading text-sm tracking-widest'>EST. TRAVEL TIME</span>
                                <span className='text-white text-2xl font-body'>{planet.travel_time}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Destinations;