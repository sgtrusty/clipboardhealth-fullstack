import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto block md:flex w-full p-8 space-x-0 md:space-x-2">
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-2xl md:text-3xl mb-1">About us</h2>
          <p className="mb-2 text-sm md:text-base">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
          <p className="text-sm md:text-base">All copyrights reserved © 2020 - Health Explore</p>
        </div>

        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h2 className="font-bold text-2xl md:text-3xl mb-1">Sitemap</h2>
          <ul>
            <li><a className="mt-2 text-sm md:text-base" href="#">Nurses</a></li>
            <li><a className="mt-2 text-sm md:text-base" href="#">Employers</a></li>
            <li><a className="mt-2 text-sm md:text-base" href="#">Social networking</a></li>
            <li><a className="mt-2 text-sm md:text-base" href="#">Jobs</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h2 className="font-bold text-2xl md:text-3xl mb-1">Privacy</h2>
          <ul>
            <li><a className="mt-2 text-sm md:text-base" href="#">Terms of use</a></li>
            <li><a className="mt-2 text-sm md:text-base" href="#">Privacy policy</a></li>
            <li><a className="mt-2 text-sm md:text-base" href="#">Cookie policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
