import React from 'react';
import popularProjects from '../images/popular projects.jpg'
import { GoArrowRight } from "react-icons/go";


const builders = [
  { id: 1, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: 'Resale' },
  { id: 2, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: 'Resale' },
  { id: 3, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: 'Resale' },
  { id: 4, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: 'Resale' },
  { id: 5, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: '' },
  { id: 6, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: '' },
  { id: 7, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: '' },
  { id: 8, image: popularProjects, name: 'Builder Name', projects: '00 Projects', type: 'Sale', type2: '' },
];

const PopularBuilders = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl text-left font-inter mb-6 font-semibold">Popular Builders</h2>
      <div className="grid grid-cols-4 gap-4">
        {builders.map((builder) => (
          <>
            <div key={builder.id} className="p-4 bg-white rounded shadow flex">
              <img src={builder.image} alt={builder.name} className="rounded-full m-2" />
              <div>
                <h3 className="font-bold">{builder.name}</h3>
                <p>{builder.projects}</p>
                <div className='flex justify-around'>
                  <p className='bg-[#C2EAF8] text-[#FF6400] pl-4 pr-4 '>{builder.type}</p>
                  <p className='bg-[#C2EAF8] text-[#FF6400] pl-4 pr-4 '>{builder.type2}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className='flex justify-center items-center m-12'>
        <button className="m-4 px-4 py-2 flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PopularBuilders;
