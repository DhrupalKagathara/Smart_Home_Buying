import React from 'react';
import SBH1 from '../images/SBH1.png';
import SBH2 from '../images/SBH2.png';
import SBH3 from '../images/SBH3.png';
import SBH4 from '../images/SBH4.png';
import { GoArrowRight } from "react-icons/go";


const MarketRates = () => {
  return (
    <>
      <div className=''>
        <h2 className="text-3xl text-gray-900 font-semibold text-left mb-6 mt-12 ">Smart Home Buying</h2>
        <div className="grid grid-cols-4 gap-4 shadow-md">
          <div className="p-4 bg-blue-100 rounded">
            <img src = {SBH1} alt='no data' className=''/>
            <h2 className="font-bold text-left">Market Rates</h2>
            <p className='text-left'>Get the latest property rates and trends at a glance.</p>
          </div>
          <div className="p-4 bg-blue-100 rounded">
            <img src = {SBH2} alt='no data' className=''/>
            <h2 className="font-bold text-left">Pay in small EMI's</h2>
            <p className='text-left'>Plan your mortgage payments in small, manageable EMIs.</p>
          </div>
          <div className="p-4 bg-blue-100 rounded">
            <img src = {SBH3} alt='no data' className=''/>
            <h2 className="font-bold text-left">Top Investment Spots</h2>
            <p className='text-left'>Find the best areas for real estate investment.</p>
          </div>
          <div className="p-4 bg-blue-100 rounded">
            <img src = {SBH4} alt='no data' className=''/>
            <h2 className="font-bold text-left">Market Insights</h2>
            <p className='text-left'>Access key research findings for smarter decisions.</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='justify-start'>
            <button className="m-4 px-4 py-2 flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="col-span-4 p-4 bg-blue-100 rounded text-center">
          <h2 className="font-bold font-sans text-left text-orange-500 text-xl">Book Your Dream Home with Just ₹1</h2>
          <div className='flex justify-end relative bottom-4 '>
            <button className="m-4 px-4 py-2 flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketRates;