import React from 'react';
import promoImage from '../assets/images/mike-von-bWUOx0SaSAk-unsplash.jpg';

export default function Dashboard() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-52"
    style={{
      backgroundImage: `url(${promoImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      }}
      >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3 font-Work">New arrivals are here</h1>
        <p className="text-lg mb-5 font-Work">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.
        </p>
        <button className="bg-white text-black py-3 px-8 rounded-lg font-bold font-Work hover:bg-gray-200 transition duration-300 ease-in-out">Shop New Arrivals</button>
      </div>
    </div>
  );
}