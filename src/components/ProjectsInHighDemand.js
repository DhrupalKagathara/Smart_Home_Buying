import React from 'react';
import HDProjects1 from '../images/HD Projects1.jpg';
import HDProjects2 from '../images/HD Projects2.jpg';
import HDProjects3 from '../images/HD Projects3.jpg';
import HDProjects4 from '../images/HD Projects4.jpg';
import { GoArrowRight } from "react-icons/go";


const projects = [
  { id: 1, img: HDProjects1, location: 'Bay View, Sector 10 Vashi, Navi Mumbai', design: '2 BHK Apartment, 2 Baths', price: '₹1.6-2.2 Cr.', possession: 'Jan 2026' },
  { id: 3, img: HDProjects2, location: 'Bay View, Sector 10 Vashi, Navi Mumbai', design: '2 BHK Apartment, 2 Baths', price: '₹1.6-2.2 Cr.', possession: 'Jan 2026' },
  { id: 2, img: HDProjects3, location: 'Bay View, Sector 10 Vashi, Navi Mumbai', design: '2 BHK Apartment, 2 Baths', price: '₹1.6-2.2 Cr.', possession: 'Jan 2026' },
  { id: 4, img: HDProjects4, location: 'Bay View, Sector 10 Vashi, Navi Mumbai', design: '2 BHK Apartment, 2 Baths', price: '₹1.6-2.2 Cr.', possession: 'Jan 2026' },
];

const ProjectsInHighDemand = () => {
  return (
    <div className="my-8">
      <h2 className=" font-inter font-semibold text-left text-3xl mt-4 mb-4">Projects in High Demand</h2>
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-white rounded">
            <img src={project.img} alt='no data loaded' className="mb-2" />
            <h3 className="font-bold text-left">{project.name}</h3>
            <p className='text-left'>{project.location}</p>
            <p className='text-left'>{project.design}</p>
            <p className='text-left'>{project.price}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <button className="m-4 px-4 py-2 flex justify-center items-center bg-orange-500 text-white rounded h-10 w-40">Book a Call
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectsInHighDemand;
