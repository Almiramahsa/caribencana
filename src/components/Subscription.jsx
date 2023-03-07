import React from 'react';
import cari from '../assets/cari-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Subscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email yang di-submit: ', email);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-4 m-4  ">
      <div className="container justify-center py-2 mx-10 sm:mx-16">
        <Link href="https://caribencana.id/">
          <img width="80" height="80" src={cari} alt="CARI Website"></img>
        </Link>
        <form onSubmit={handleSubmit} className="py-4">
          <div className="flex flex-col items-start gap-2">
            <p htmlFor="email" className="text-sm font-medium md:text-md md:w-1/2 text-gray-700">
              Subscribe For more updates & tailor-made special briefs
            </p>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className=" block p-4 text-gray-700  border-gray-300 border   md:w-1/2 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 "
              value={email}
              onChange={handleChange}
            />

            <button
              type="submit"
              className=" py-2 my-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="container mx-auto py-2  ">
        <div className="row-span-3 md:w-3/4 p-6 mx-4 ">
          <p className="text-md font-bold ">Our Mantra</p>
          <p className="text-md mt-2 italic">Big data is enriching, Actionable information is critical, but Knowledge-based investment and development is indispensable for genuine resilience!</p>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
