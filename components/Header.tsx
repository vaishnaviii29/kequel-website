import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/kequel logo.png';
import Logo2 from '../public/assets/cart.png';
import Logo3 from '../public/assets/account_circle.png';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Adjust the delay (in milliseconds) as needed
    setLeaveTimeout(timeout);
  };

  return (
    <>
      <div className={'relative flex justify-between items-center px-5 sm:px-15 py-4 pl-36'} style={{ opacity: 1, transition: 'opacity 0.3s ease' }}>
        <div>
          <Link href="/" className='flex items-center gap-3'>
            <Image src={Logo} alt="Kequel Logo" width={40} height={40} />
           
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6 items-center font-inter relative pr-20">
          <Link href="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
          <Link href="/" className='flex items-center gap-3'>
            <Image src={Logo2} alt="Kequel Logo" width={40} height={40} />
           
          </Link>
          <Link href="/" className='flex items-center gap-3'>
            <Image src={Logo3} alt="Kequel Logo" width={40} height={40} />
           
          </Link>
          </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md font-inter">
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Contact</Link>

        </nav>
      )}
    </>
  );
};

export default Header;
