import React from 'react';
import { GoArrowRight } from "react-icons/go";


const App = () => {
  return (
    <div className="flex-col w-auto items-center justify-center bg-gray-100">
      <div className=" text-center py-8 px-4 rounded-lg">
        <h1 className="text-5xl font-inter mb-4">Your ideal home is just a click away—start your search now!</h1>
        <div className='flex justify-center items-center'>
        <button className="m-4 px-4 py-2 flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
          <GoArrowRight />
        </button>
      </div>
      </div>
      <footer className="mt-8 text-sm text-gray-600 flex justify-between w-full max-w-screen-lg px-4">
        <div className='flex justify-evenly items-start'>
        <a href="/privacy-policy" className="text-[#FF6400]">Privacy Policy</a>
        <a href="/terms-and-services" className="text-[#FF6400]">Terms and Services</a>
        <a href="/feedback" className="text-[#FF6400]">Feedback</a>
        </div>
        <div className='text-right text-[#FF6400]'>© Copyright 2024 Dreamhaus</div>
      </footer>
    </div>
  );
}

export default App;
