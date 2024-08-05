import React from 'react';
import NewLaunched from '../images/launched projects.jpg'

const projects = [
    {
        id: 1,
        builderName: "Builder Name",
        locality: "Locality",
        bhk: "1,2 BHK",
        price: "₹ 30- 60 Lacs",
        completionDate: "Completion in July 2025",
        image: NewLaunched // Add the correct path to your image
    },
    {
        id: 2,
        builderName: "Builder Name",
        locality: "Locality",
        bhk: "1,2 BHK",
        price: "₹ 30- 60 Lacs",
        completionDate: "Completion in July 2025",
        image: NewLaunched
    },
    {
        id: 3,
        builderName: "Builder Name",
        locality: "Locality",
        bhk: "1,2 BHK",
        price: "₹ 30- 60 Lacs",
        completionDate: "Completion in July 2025",
        image: NewLaunched
    },
    {
        id: 4,
        builderName: "Builder Name",
        locality: "Locality",
        bhk: "1,2 BHK",
        price: "₹ 30- 60 Lacs",
        completionDate: "Completion in July 2025",
        image: NewLaunched
    },
    {
        id: 5,
        builderName: "Builder Name",
        locality: "Locality",
        bhk: "1,2 BHK",
        price: "₹ 30- 60 Lacs",
        completionDate: "Completion in July 2025",
        image: NewLaunched
    }
];

const NewlyLaunchedProjects = () => {
    return (
        <div className="my-8">
            <h2 className="text-2xl font-inter mb-4 text-left font-semibold">Newly Launched Projects</h2>
            <div className="flex space-x-4 ">
                {projects.map((project) => (
                    <>
                    <div key={project.id} className="flex bg-white shadow-md rounded-lg p-4 min-w-[250px]">
                        <img className="w-16 h-16 object-cover m-4 rounded-full" src={project.image} alt="Project" />
                        <div>
                        <h3 className="text-lg font-semibold mt-4 text-left">{project.builderName}</h3>
                        <p className="text-sm text-gray-500 text-left">{project.locality}</p>
                        <p className="text-sm text-gray-500 text-left">{project.bhk}</p>
                        <p className="text-sm text-gray-500 text-left">{project.price}</p>
                        <p className="text-sm text-gray-500 text-left">{project.completionDate}</p>
                        <div className="mt-4 flex items-center">
                            <span className=" text-black text-xs font-semibold px-2 py-1">Get preferred options @zero brokerage</span>
                        </div>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default NewlyLaunchedProjects;
