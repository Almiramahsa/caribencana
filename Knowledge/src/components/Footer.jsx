import React from 'react';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { MdEmail } from '@react-icons/all-files/Md/MdEmail';
function Footer() {
  return (
    <div class="container mx-auto px-4">
      <div class="container mx-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-4 m-4 p-2">
        <div className="w-full ">
          <h5 className="text-md md:text-md  text-gray-600">For more information, Follow us !</h5>
          <div className="mt-2 lg:mb-0 mb-6">
            <a href="https://twitter.com/caribencana_id" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaTwitter size={24} />
              </button>
            </a>
            <a href="https://www.linkedin.com/company/caribencana/" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaLinkedin size={24} />
              </button>
            </a>
            <a href="https://web.facebook.com/caribencana.id?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaFacebook size={24} />
              </button>
            </a>
            <a href="https://www.instagram.com/caribencana.id/" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaInstagram size={24} />
              </button>
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 w-1/2 sm:w-full  ">Due to COVID-19, all staff and associates of CARI! are working remotely.</h3>
          <h3 className="text-gray-500 flex items-center mr-4 mb-2">
            <MdEmail size={22} className="mr-2" />
            <a href="info@caribencana.id">info@caribencana.id</a>
          </h3>

          <h3 className="text-gray-500 flex items-center  ">
            <FaPhoneAlt size={20} className="mr-2" />
            (+62) 81-1203-0108
          </h3>
        </div>
        <div className="sm:mx-20">
          <span className="block uppercase text-black text-sm font-semibold mb-2">Useful Links</span>
          <ul className="justify-left text-left">
            <li>
              <a className="text-gray-800 hover:text-orange-500 font-base block pb-2 text-sm" href="https://caribencana.id/">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-800 hover:text-orange-500 font-base block pb-2 text-sm" href="https://knowledge.caribencana.id/">
                Knowledge Portal
              </a>
            </li>
            <li>
              <a className="text-gray-800 hover:text-orange-500 font-base block pb-2 text-sm" href="https://knowledge.caribencana.id/publications">
                Publications
              </a>
            </li>
            <li>
              <a className="text-gray-800 hover:text-orange-500 font-base block pb-2 text-sm" href="https://caribencana.id/cari">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border border-gray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-800 font-semibold my-5">
            © <span>2023</span>
            <a href="caribencana.id" className="text-gray-900 hover:text-orange-500" target="_blank">
              {' '}
              Caribencana.id
            </a>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
