import React, { useEffect, useState } from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'work', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const sectionTitle = currentSection === 'home' ? 'Home' : 
                           currentSection === 'work' ? 'Work' : 
                           currentSection === 'projects' ? 'Projects' :
                           currentSection === 'about' ? 'About' :
                           currentSection === 'contact' ? 'Contact' :
                           currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
        setActive(sectionTitle);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId, sectionTitle) => {
    setActive(sectionTitle);
    setToggle(false); // Close mobile menu
    
    // Special handling for contact section
    if (sectionId === 'contact') {
      // For contact, scroll to the bottom of the page since it's the last section
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTo = documentHeight - windowHeight;
      
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
      return;
    }
    
    // Function to scroll to element
    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    // Try to scroll immediately
    if (!scrollToElement()) {
      // If element not found (might be lazy loaded), wait a bit and try again
      setTimeout(() => {
        scrollToElement();
      }, 100);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm border-b border-lightGrey/20" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-6xl mx-auto'>
        
        {/* Logo/Brand - Now on the left */}
        <div className='flex items-center'>
          <button 
            onClick={() => handleNavClick('home', 'Home')}
            className="text-lightGrey hover:text-white hover:scale-110 transition-all duration-200 p-2"
            title="Home"
          >
            <FaHome size={20} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className='list-none hidden md:flex flex-row gap-8'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <button 
                onClick={() => handleNavClick(nav.id, nav.title)}
                className={`${
                  active === nav.title 
                    ? "text-white border-b-2 border-lightGrey" 
                    : "text-lightGrey hover:text-white"
                } text-base font-medium pb-1 transition-all duration-200`}
              >
                {nav.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className='hidden md:flex items-center gap-4'>
          <a
            href="https://github.com/ayush1330"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGrey hover:text-white transition-colors duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://x.com/ayushrajput08?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGrey hover:text-white transition-colors duration-200"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-singh-1330c/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGrey hover:text-white transition-colors duration-200"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-6 h-6 object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-sm border-b border-lightGrey/20 shadow-lg`}
      >
        <div className="w-full px-6 py-4">
          <ul className='list-none flex flex-col gap-4'>
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <button 
                  onClick={() => handleNavClick(nav.id, nav.title)}
                  className={`${
                    active === nav.title 
                      ? "text-white border-l-2 border-lightGrey pl-2" 
                      : "text-lightGrey hover:text-white"
                  } text-base font-medium block py-2 transition-all duration-200 text-left`}
                >
                  {nav.title}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Mobile Social Links */}
          <div className='flex items-center gap-4 mt-4 pt-4 border-t border-accent/10'>
            <a
              href="https://github.com/ayush1330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGrey hover:text-white transition-colors duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://x.com/ayushrajput08?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGrey hover:text-white transition-colors duration-200"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-singh-1330c/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGrey hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
