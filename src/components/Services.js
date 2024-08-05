import React from 'react';
import buyHouse from '../images/buy-house.jpg';
import rentHouse from '../images/rent-house.jpg';
import pgCoLiving from '../images/pg-coliving.jpg';
import commercialSpaces from '../images/commercial-spaces.jpg';
import buyPlot from '../images/buy-plot.jpg';
import sellRentImage from '../images/work-indoors.jpg';
import { GoArrowRight } from "react-icons/go";


const Services = () => {
  const services = [
    { img: buyHouse, title: 'Buy a House' },
    { img: rentHouse, title: 'Rent a House' },
    { img: pgCoLiving, title: 'PG/Co-Living' },
    { img: commercialSpaces, title: 'Commercial Spaces' },
    { img: buyPlot, title: 'Buy Plot' },
  ];

  return (
    <>
      <div className="py-4">
        <div className="max-w-1xl mx-auto lg:px-8 ">
          <h2 className="text-3xl text-gray-900 text-left mb-2 font-semibold">Our Services</h2>
          <div className="grid grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <img src={service.img} alt={service.title} className="w-full h-46 object-cover mb-2" />
                <h3 className="text-xl text-left">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className="m-4 px-4 py-2 flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
          <GoArrowRight />
        </button>
      </div>

      <div className="bg-white shadow-md border-solid rounded-lg my-8">
        <div className="flex ">
          <div className="p-8">
            <h2 className="text-2xl text-orange-500 font-inter text-left">Sell or rent your property</h2>
            <p className="mt-2 text-gray-700 text-base text-left font-inter">
              Looking to sell or rent your property? We're here to make it easy! With our extensive network and expertise, we'll help you find the perfect buyers or tenants in no time.
              Get the best value and enjoy a hassle-free process with Dreamhausi. Let's get started!
            </p>
            <div className="">
            <div className='mt-3 flex justify-start'>
              <button className="flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
                <GoArrowRight />
              </button>
            </div>
            </div>
          </div>
          <div className="">
            <img className="relative w-[1434px] rounded-xl" src={sellRentImage} alt="Sell or Rent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
