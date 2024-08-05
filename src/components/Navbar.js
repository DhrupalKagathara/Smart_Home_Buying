import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-100 w-full">
      <div className="max-w-7xl items-end ">
        <div className="flex items-center justify-between h-16">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <a href="./" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="./" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="./" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Offers</a>
                <a href="./" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="./" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Builders</a>
                <a href="./" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Help</a>
                <a href="./" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Insights</a>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
