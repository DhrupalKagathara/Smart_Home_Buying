import React from 'react';
import building from '../images/building.png';
import skyBackground from '../images/sky-background.png';
import { GoArrowRight } from "react-icons/go";


const HeroSection = () => {
    return (
        <div className="h-screen">
            <img src={skyBackground} alt="Sky Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
                <div className='image-container '>
                    <img src={building} alt="Building" className=" " />
                </div>
                <div className='text-container relative left-96 bottom-24'>
                    <div className='heading'>
                        <h1 className="text-start text-black text-5xl font-bold">Find Your Perfect Home with Dreamhausi</h1>
                    </div>
                    <div className='sub-heading text-wrap'>
                        <p className="mt-4 text-black text-lg">Search through our handpicked selection of homes and apartments to find the one that fits your lifestyle perfectly.</p>
                        <p className="mt-4 text-black text-lg">Whether you're looking for a cozy apartment in the city or a spacious family home in the suburbs, our listings are designed to help you find the perfect place to call home.</p>
                    </div>
                    <div className='justify-start'>
                        <button className="m-4 px-4 py-2 flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
                            <GoArrowRight />
                        </button>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default HeroSection;
