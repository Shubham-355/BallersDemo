import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo className="h-8 w-auto text-white" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/investments" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Investments</Link>
              <Link to="/philanthropy" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Philanthropy</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/investments" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Investments</Link>
            <Link to="/philanthropy" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Philanthropy</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

