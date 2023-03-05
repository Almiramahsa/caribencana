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
        <div className="w-full  px-4">
          <h5 className="text-lg md:text-md mt-0 mb-2 text-gray-600">For more information, Follow us !</h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaTwitter size={24} />
              </button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaLinkedin size={24} />
              </button>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaFacebook size={24} />
              </button>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <button className=" text-gray-500 hover:text-orange-500 font-base h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:animate-bounce" type="button">
                <FaInstagram size={24} />
              </button>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 md:w-1/2  sm:w-1/2">Due to COVID-19, all staff and associates of CARI! are working remotely.</h3>
          <h3 className="text-gray-500 flex items-center mr-4 mb-2">
            <MdEmail size={22} className="mr-2" />
            <a href="info@caribencana.id">info@caribencana.id</a>
          </h3>

          <h3 className="text-gray-500 flex items-center  ">
            <FaPhoneAlt size={20} className="mr-2" />
            (+62) 81-1203-0108
          </h3>
        </div>
        <div className="justify-left px-4 ml-auto">
          <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
          <ul className="list-unstyled text-left">
            <li>
              <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">
                Home
              </a>
            </li>
            <li>
              <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">
                Knowledge Portal
              </a>
            </li>
            <li>
              <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">
                Publications
              </a>
            </li>
            <li>
              <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border border-gray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2023</span>
            <a href="caribencana.id" className="text-blueGray-500 hover:text-gray-800" target="_blank">
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
