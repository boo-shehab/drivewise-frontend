/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style components/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/drivewise_logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const menuItems = [
    { label: 'Cars', to: '/' },
    { label: 'Add Reservation', to: '/reservation_form' },
    { label: 'My Reservations', to: '/my_reservations' },
    { label: 'Add Car', to: '/new_car' },
    { label: 'Delete Car', to: '/delete_car' },
  ];
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Drivewise" />
      </Link>
      <FontAwesomeIcon icon={faBars} size="lg" className={showMenu ? 'not-active' : ''} onClick={handleMenuToggle} />
      <FontAwesomeIcon icon={faX} className={showMenu ? '' : 'not-active'} onClick={handleMenuToggle} />
      <ul className={`mobile-menu ${showMenu ? 'active' : ''}`}>

        {menuItems.map((item, index) => (
          <li key={index} className={activeItem === index ? 'active' : ''}>
            <Link to={item.to} onClick={() => handleClick(index)}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
