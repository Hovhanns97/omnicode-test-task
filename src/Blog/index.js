import React from 'react';
import './style.css';
import { Container } from 'react-bootstrap';

export const BlogPage = () => {
  return (
    <Container>
      <div className='blog'>
        <h1>Blog</h1>
        <div className='colors'>
          <div className='color green'></div>
          <div className='color violet'></div>
          <div className='color rose'></div>
        </div>
      </div>
    </Container>
  );
};
