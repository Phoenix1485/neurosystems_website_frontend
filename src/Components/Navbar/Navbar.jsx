import { useState, useEffect } from 'react';
import { FiMail, FiMenu, FiX } from 'react-icons/fi';
import { FaArrowRight, FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import Button from '../Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-96 right-96 z-50 mx-auto">
      {/* Main Container */}
      <div className={`transition-all duration-500 ${scrolled ? 'mt-3' : 'mt-0'}`}>
        {/* Main Navbar */}
        <nav className={`transition-all flex items-center justify-center duration-500 ${scrolled
          ? 'rounded-xl bg-gray-700/10 backdrop-blur-xl py-4 shadow-sm'
          : 'bg-transparent backdrop-blur-0 py-3'
          }`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-white font-black text-2xl">Neurosystems</div>

            <div className="hidden md:flex space-x-10 font-semibold">
              {/* Nav items with animated underline effect */}
              <NavLink href="/" label="Home" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#" label="About" />
              <NavLink href="#" label="Contact" />
            </div>

            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
          <div className='w-32'>
            <a href="#">
              <button className='bg-main hover:bg-main-dark transition-all duration-200 px-3 py-2 rounded-lg'>Get started</button>
            </a>
          </div>
        </nav>
        {/* Secondary Bar - slides down on scroll */}
        <div className={`hidden md:block transition-all duration-500 ${scrolled
          ? 'translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
          }`}>
          <div className="container mx-auto px-4 pt-1">
            <div className="rounded-xl bg-gray-700/10 backdrop-blur-xl">
              <div className="px-4 py-2 flex justify-between items-center">
                <div className="flex items-center font-semibold space-x-4">
                  <span>Follow me on </span>
                  <a href="#" className="text-white hover:text-gray-300 transition">
                    <FaDiscord className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300 transition">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300 transition">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>

                <a href="#" target="_blank" aria-label="Quote your project with me" className="group flex hover:mr-3 w-full items-center justify-center gap-2 text-md leading-6 font-semibold text-white transition-all duration-300 sm:w-[22rem] sm:text-md md:w-fit 3xl:px-10 3xl:py-5 3xl:text-2xl">Quote your project with me<svg className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1 3xl:h-6 3xl:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="transition-all duration-300 [stroke-dasharray:10] [stroke-dashoffset:10] group-hover:[stroke-dashoffset:20]" d="M1.75 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg></a>
                <a href="mailto:info@neurosystems.de" className="text-white hover:text-gray-300 transition font-semibold flex items-center">
                  <FiMail className="mr-2 w-5 h-5" />
                  info@neurosystems.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
        <div className="bg-gray-400/50 backdrop-blur-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-3 pb-4">
            {/* Mobile nav links */}
            <a href="#" className="text-white hover:text-gray-300 transition py-2">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition py-2">Projects</a>
            <a href="#" className="text-white hover:text-gray-300 transition py-2">About</a>
            <a href="#" className="text-white hover:text-gray-300 transition py-2">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

// NavLink component with animated underline effect
const NavLink = ({ href, label }) => {
  return (
    <div className="relative group">
      <a href={href} className="text-white transition py-1 block">
        {label}
      </a>
      {/* Animated underline that grows from left to right on hover */}
      <div className="absolute bottom-0 left-0 w-full h-[0.2rem]">
        <div className="bg-main-light rounded-xl h-full w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Navbar;