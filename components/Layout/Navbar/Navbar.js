import React, { useState } from 'react';
import Link from 'next/link'
import MobileNavbar from './MobileDropdown'

const Navbar = () => {
  const [showMobileNavMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="block md:fixed bg-white w-full z-10 border-b border-gray-100 md:border-b-0">
      <div className="container mx-auto flex justify-between items-center w-full bg-white p-3 lg:p-3 relative">
        <div className="flex align-items-center">
          <div className="flex items-center lg:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    id="main-menu" aria-haspopup="true" onClick={() => { setShowMobileMenu(!showMobileNavMenu); }}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
			<Link href="/">
				<a className="text-blue-500 text-lg font-semibold pt-1 ml-2 md:ml-4 md:mb-2">HEALTH EXPLORE</a>
			</Link>
        </div>

        { showMobileNavMenu && 
          <MobileNavbar
            options={[
			  {name:() => (
                <a href="#" className="block px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-blue-400 border border-blue-400 rounded-md text-center" role="menuitem">CREATE JOB</a>
              ), to:'#'},
              {name:'Profile', to:'/profile'},
              {name:'Jobs', to:'/jobs'},
              {name:'Professional Network', to:'/'},
              {name:'Lounge', to:'/'},
              {name:'Salary', to:'/'},
            ]}
            optionHandle={(e) => console.log(e.target)}
          /> }

        <ul className="lg:flex hidden lg:block space-x-3 lg:space-x-4 xl:space-x-8 text-gray-900">
          <li className=""><Link href="/profile" passHref><a className="mr-5 font-semibold no-underline hover:text-blue-500">PROFILE</a></Link></li>
          <li className=""><Link href="/jobs" passHref><a className="mr-5 font-semibold no-underline hover:text-blue-500">JOBS</a></Link></li>
          <li className=""><Link href="/" passHref><a className="mr-5 font-semibold no-underline hover:text-blue-500">PROFESSIONAL NETWORK</a></Link></li>
          <li className=""><Link href="/" passHref><a className="mr-5 font-semibold no-underline hover:text-blue-500">LOUNGE</a></Link></li>
          <li className=""><Link href="/" passHref><a className="mr-5 font-semibold no-underline hover:text-blue-500">SALARY</a></Link></li>
        </ul>

        <div className="flex items-center justify-around space-x-10 md:mr-6">
          <button className="hidden lg:block font-semibold text-blue-400 border border-blue-400 rounded-lg px-4 py-2">CREATE JOB</button>
          <div className="relative cursor-pointer">
            <img alt="Avatar" src="profile/cf9ebbf2-aed0-4d3a-9951-576c0019bb9e.png"/>
            <span className="absolute -top-2 -right-2 rounded-2xl border-4 px-1.5 py-0 text-white text-center bg-red-500 border-white text-sm">2</span>
          </div>
          <a className="hidden lg:block font-semibold no-underline" href="#">LOGOUT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
