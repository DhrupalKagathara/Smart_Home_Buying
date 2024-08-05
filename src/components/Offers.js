import React from 'react';
import Offer from '../images/offer.jpg';

const offers = [
  { id: 1, builder: 'Builder Name', locality: 'Locality', area: '1,2 BHK', price: '₹30-60 Lacs', img: Offer },
  { id: 2, builder: 'Builder Name', locality: 'Locality', area: '1,2 BHK', price: '₹30-60 Lacs', img: Offer },
  { id: 3, builder: 'Builder Name', locality: 'Locality', area: '1,2 BHK', price: '₹30-60 Lacs', img: Offer },
  { id: 4, builder: 'Builder Name', locality: 'Locality', area: '1,2 BHK', price: '₹30-60 Lacs', img: Offer },
  { id: 5, builder: 'Builder Name', locality: 'Locality', area: '1,2 BHK', price: '₹30-60 Lacs', img: Offer },
];

const Offers = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl text-start font-inter font-semibold">Offers for You</h2>
      <div className="grid grid-cols-5 gap-2">
        {offers.map((offer) => (
          <div key={offer.id} className="p-2 bg-white rounded shadow">
            <div className="flex justify-between items-center mb-2">
            <img src={offer.img} alt={offer.name} className="rounded-full m-4" />
            <div className=''>
              <h3 className="font-inter font-semibold text-left">{offer.builder}</h3>
              <p className=' text-left text-xs'>{offer.locality}</p>
              <p className=' text-left text-xs'>{offer.area}</p>
              <p className=' text-left text-sm'>{offer.price}</p>
            </div>
          </div>
            <p className="mt-2 px-4 py-2 bg-[#C2EAF8] text-black rounded">Pay ₹35,000/- and book your dream home</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
