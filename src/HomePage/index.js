import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import './style.css';

import Expert from '../images/expert.png';
import Icon_1 from '../images/icon-1.png';
import Icon_2 from '../images/icon-2.png';
import Icon_3 from '../images/icon-3.png';

export const HomePage = () => {
  return (
    <>
      <Container>
        <div className='heading'>
          <div className='get-started'>
            <p className='main-header'>Make bright ideas happen</p>
            <p className='main-description'>
              Brief description of the platform
            </p>
            <div className='buttons'>
              <button className='button browse'>Browse Experts</button>
              <button className='button register'>Register as Expert</button>
            </div>
          </div>
          <div className='carousel-parrent'>
            <div className='carousel-heading'>
              <p>AI expert</p>
              <div className='colors'>
                <div className='color green'></div>
                <div className='color violet'></div>
                <div className='color rose'></div>
              </div>
            </div>
            <div className='carousel'>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <img
                    src={Expert}
                    alt='expert'
                    className='d-block w-50 m-auto mt-5'
                  />
                  <div className='caption-info'>
                    <h3>Jane Doe</h3>
                    <p>Javascript developer</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Expert}
                    alt='expert'
                    className='d-block w-50 m-auto mt-5'
                  />
                  <div className='caption-info'>
                    <h3>Jane Doe</h3>
                    <p>Javascript developer</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Expert}
                    alt='expert'
                    className='d-block w-50 m-auto mt-5'
                  />
                  <div className='caption-info'>
                    <h3>Jane Doe</h3>
                    <p>Javascript developer</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <h1 className='how-it-work-head'>How it Work</h1>
      </Container>

      <div className='how-it-works'>
        <Container>
          <div className='how-content'>
            <div className='how-item'>
              <div className='numeration'>
                <p className='number'>1</p>
                <div className='color green'></div>
              </div>
              <h1>Target Identification and Prioritization</h1>
              <p className='item-p'>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
            </div>
            <div className='how-item'>
              <div className='numeration'>
                <p className='number'>2</p>
                <div className='color violet'></div>
              </div>
              <h1>Target Identification and Prioritization</h1>
              <p className='item-p'>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
            </div>
            <div className='how-item'>
              <div className='numeration'>
                <p className='number'>3</p>
                <div className='color rose'></div>
              </div>
              <h1>Target Identification and Prioritization</h1>
              <p className='item-p'>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className='logo-content'>
        <div className='logo'></div>
        <div className='text-info'>
          <h1 className='text-info-heading'>The brains behind this</h1>
          <p className='text-info-p'>
            Our mission at <a href='/'>Experts.ai</a> is to bridge the gap
            between visionary businesses and exceptional AI talent. We believe
            that AI has the potential to revolutionize industries and create
            unprecedented value, but only when placed in the hands of those who
            truly understand its complexities and capabilities. We strive to
            facilitate collaborations that yield not only groundbreaking
            technological advancements but also foster learning and growth for
            both our clients and experts.
          </p>
          <p className='text-info-p'>
            We pride ourselves on being more than just a platform – we're a
            community where brilliance converges. Our platform serves as a hub
            where businesses seeking AI expertise can seamlessly connect with a
            curated network of AI specialists, data scientists, machine learning
            engineers, and visionaries. We meticulously vet our experts,
            ensuring that only the most accomplished and forward-thinking minds
            become part of the Experts.ai community.
          </p>
        </div>
      </div>

      <Container>
        <div className='cards-content'>
          <h1>Browse expert by category</h1>
          <div className='cards'>
            <div className='card-item'>
              <img src={Icon_1} />
              <h1>Development & IT</h1>
              <p>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
              <p>Explore more</p>
            </div>
            <div className='card-item'>
              <img src={Icon_3} />
              <h1>All Services</h1>
              <p>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
              <p>Explore more</p>
            </div>
            <div className='card-item'>
              <img src={Icon_2} />
              <h1>Design & Creative</h1>
              <p>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
              <p>Explore more</p>
            </div>
            <div className='card-item'>
              <img src={Icon_3} />
              <h1>All Services</h1>
              <p>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
              <p>Explore more</p>
            </div>
            <div className='card-item'>
              <img src={Icon_2} />
              <h1>Design & Creative</h1>
              <p>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
              <p>Explore more</p>
            </div>
            <div className='card-item'>
              <img src={Icon_1} />
              <h1>Development & IT</h1>
              <p>
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </p>
              <p>Explore more</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
