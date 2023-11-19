import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';

import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import LinkedIn from '../../images/linkedin.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='footer-content-1'>
          <h1>Experts.ai</h1>
          <ul>
            <li>Prcing</li>
            <li>Blog</li>
            <li>Help</li>
          </ul>
        </div>
        <div className='footer-content-2'>
          <div className='medias'>
            <img src={Facebook} alt='facebook' />
            <img src={Instagram} alt='instagram' />
            <img src={LinkedIn} alt='linkedin' />
          </div>
          <p>Terms of Use & Privacy Policy</p>
        </div>
        <hr />
        <p className='terms'>© 2022 Experts | All rights reserved.</p>
      </Container>
    </div>
  );
};
