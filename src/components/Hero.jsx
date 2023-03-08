import React, { useState, useEffect } from 'react';
import cari from '../assets/cari-logo.png';
import DisplayMap from './DisplayMap';
function Hero() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative">
      <nav className={`absolute flex items-center justify-between flex-wrap top-5 right-5 z-20 w-2/4 p-6 bg-zinc-800/25    hover:-translate-y-2  transition transform rounded-md  ${toggle ? 'block' : 'hidden'}`}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="https://caribencana.id/">
            <img className="fill-current  w-30 mr-2" width="80" height="80" viewBox="0 0 54 54" src={cari} alt="CARI Website"></img>
          </a>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-white/75">
              Home
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-white/75">
              Knowledge Portal
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 hover:text-white/75">
              Publications
            </a>
            <a href="/special-brief" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-white/75">
              Special Brief
            </a>
            <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white/75">
              About
            </a>
          </div>

          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Login
            </a>
          </div>
        </div>
      </nav>
      <div className="relative top-0 left-0 h-500 w-full z-10 outline-none">
        <DisplayMap />
      </div>
      <button className={`absolute top-2 right-2 z-20 bg-gray-900 hover:bg-gray-800  transition transform rounded-md focus:outline-none ${toggle ? 'hidden' : 'block'}`} onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

export default Hero;
