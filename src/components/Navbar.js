import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    
    // Toggle body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Add navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on window resize if screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        className="navbar" 
        style={{
          padding: isScrolled ? '15px 0' : '20px 0',
          backgroundColor: isScrolled ? 'rgba(18, 18, 18, 0.95)' : 'rgba(18, 18, 18, 0.9)',
          boxShadow: isScrolled ? '0 5px 20px rgba(0, 0, 0, 0.2)' : 'none'
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Triad Logo" height="40" />
          </a>
          
          <button className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={closeMenu}>O que é</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#method" onClick={closeMenu}>Método</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#for-who" onClick={closeMenu}>Para quem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experts" onClick={closeMenu}>Especialistas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-primary" href="#contact" onClick={closeMenu}>Garantir minha vaga</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Menu overlay */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;