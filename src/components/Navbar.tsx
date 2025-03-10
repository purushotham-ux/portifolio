'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#experience">Experience</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-dark shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          <MobileNavLink href="/#about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink href="/#skills" onClick={toggleMenu}>Skills</MobileNavLink>
          <MobileNavLink href="/#projects" onClick={toggleMenu}>Projects</MobileNavLink>
          <MobileNavLink href="/#experience" onClick={toggleMenu}>Experience</MobileNavLink>
          <MobileNavLink href="/#contact" onClick={toggleMenu}>Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-2 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar; 