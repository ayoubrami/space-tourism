import React,{ useState} from 'react';
import data from '../../data/data.json'
import cx from 'classnames'

const Technologies = () => {
    const mql =  window.matchMedia('(min-width: 1024px)');
    const [launch, setLaunch] = useState(data['technology'][0]);
    return (
        <>
            <div 
                className='font-heading flex mt-8 p-4 justify-center md:justify-start container mx-auto text-xl tracking-widest'
            >
                <span className='text-gray-500 font-bold ml-0 md:ml-8'>03</span>
                <h1 className='text-white ml-4 tracking-widest'>SPACE LAUNCH 101</h1>
            </div>
            <div className='container mx-auto mt-4 flex flex-wrap-reverse flex-row justify-between items-center h-screen'>
                <div className='flex flex-wrap justify-center'>
                    <div className='flex items-center lg:flex-col lg:px-14 my-6 md:my-0'>
                        {data['technology'].map((ship,i) => (
                            <div 
                                key={i}
                                className={cx('cursor-pointer flex items-center justify-center border border-gray-500 mx-4 rounded-full w-14 h-14  lg:my-4 hover:border-white', ship.name === launch.name ? 'text-black bg-white' : 'text-white')}
                                onClick={() => setLaunch(ship)}
                            >
                                {i+1}
                            </div>
                        ))
                        }
                    </div>
                    <div className='flex-initial flex-col text-center lg:text-left lg:m-0 m-6'>
                        <p className='text-secondary text-sm font-heading mb-2 tracking-widest'>THE TERMINOLOGY…</p>
                        <h1 className='text-white font-body text-4xl mb-6'>{launch.name}</h1>
                        <p className='text-secondary font-heading leading-loose lg:w-96'>{launch.description}</p>
                    </div>
                </div>
                <div className='w-auto h-auto'>
                    <img alt='launch' src={mql.matches ? launch.img_portrait : launch.img_landscape} className='rounded'/>
                </div>
            </div>
        </>
    );
}
export default Technologies;