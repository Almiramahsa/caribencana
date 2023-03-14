import React from 'react';
import bgCari from '../assets/bg-cari.png';

function CariAbout() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4  mx-4">
      <div className="w-full lg:w-1/2 mx-2">
        <img src={bgCari} alt="caribencana" className="w-full" />
      </div>
      <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 mx-4 ">
        <h1 className="text-4xl font-bold text-orange-500 mb-4 mt-5">
          <span className="text-gray-500 font-normal">About </span>Cari!
        </h1>
        <p className="text-gray-700 text-normal mb-6">
          Cerdas Antisipasi Risiko bencana (CARI!)* is a research & information technology-based start-up & social venture working to enhance knowledge management for disaster risk reduction and resilient development. Our paramount vision
          is to accelerate disaster-resilient and sustainable development and society in Indonesia and Southeast Asia trough science. CARI! supports the government, academics, enterprises, and many others to bridge the whole scientific
          knowledge to the public. (*) CARI is an Indonesian word for “search” – Our full name expresses a passion for “intelligently anticipating disaster risk (by using science)".
        </p>
        <a href="https://caribencana.id/storage/files/compro/130422_CARI!_COMPRO_2022.pdf">
          <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">Company Profile</button>
        </a>
      </div>
    </div>
  );
}

export default CariAbout;
