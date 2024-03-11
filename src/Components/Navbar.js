
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = React.useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }

  React.useEffect(() => {
    showButton(); // Set initial state on mount
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);


  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
      <Link to="/" className='navbar-logo' onClick =
      {closeMobileMenu} >
      <i className='fas fa-paw'></i>
          <span className="logo-text">Sara's Dog Sitting</span>
      </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />  
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
              Services/Pricing
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/reviews" className='nav-links' onClick={closeMobileMenu}>
              Reviews
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/booking" className='nav-links' onClick={closeMobileMenu}>
              Booking
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}       
        </div>
    </nav>
    </>
  );
}

export default Navbar;
