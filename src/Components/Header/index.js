import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <div className='navbar'>
      <Container>
        <nav>
          <NavLink to='/' className='nav-band'>
            Experts.Ai
          </NavLink>
          <div className='nav-items-group'>
            <NavLink
              to='blog'
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Blog
            </NavLink>
            <NavLink
              to='experts'
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Ai Experts
            </NavLink>
          </div>
        </nav>
      </Container>
    </div>
  );
};
