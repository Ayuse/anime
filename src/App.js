import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './App.scss';

//Assets
import leftImg from './images/leftImg.png';
import rightImg from './images/rightImg.png';
import arrowRight from './images/arrow-right.svg';
import ellipse1 from './images/ellipse1.svg';

function App() {
  //Declarinig variables
  let content = useRef(null);
  let images = useRef(null);
  let tl = gsap.timeline();

  //Individual variables

  useEffect(() => {
    const firstHeadline = content.children[0].children[0];
    const secondHeadline = firstHeadline.nextSibling;
    const contentP = content.children[1];
    const btn = content.children[2];
    const imgRight = images.children[0].children[0];
    const imgLeft = images.children[0].nextSibling.children[0];

    tl.to('.hero', {
      display: 'block',
      duration: 0,
    });

    // images animation
    tl.fromTo(
      imgLeft,
      { y: 1200 },
      { y: 0, ease: 'power3.ease', duration: 1 },
      '<'
    )
      .from(
        imgLeft.children,

        {
          scale: 1.6,
          ease: 'power3.ease',
          duration: 2,
        },
        '<'
      )
      .from(
        imgRight,
        {
          y: 1200,
          ease: 'power3.ease',
          duration: 1,

          delay: 0.2,
        },
        '<'
      )
      .from(
        imgRight.children,

        {
          scale: 1.6,
          ease: 'power3.ease',
          duration: 2,
          delay: 0.2,
        },
        '<'
      );
    //content animation
    tl.from(
      [firstHeadline.children, secondHeadline.children],

      {
        y: 104,
        ease: 'power3.ease',
        delay: 0.8,
        duration: 0.7,
        stagger: 0.5,
      },
      '<'
    )
      .from(
        contentP,

        { y: 40, ease: 'power3.ease', duration: 1, opacity: 0 },
        1.2
      )
      .from(
        btn,

        { y: 20, ease: 'power3.ease', duration: 1, opacity: 0 },
        1.5
      );
  });

  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-content'>
          <div className='hero-content-inner' ref={(el) => (content = el)}>
            <h1>
              <div className='hero-content-line'>
                <div className='hero-content-line-inner'>Find Your</div>
              </div>
              <div className='hero-content-line second'>
                <div className='hero-content-line-inner second'>
                  Dream House
                </div>
              </div>
            </h1>
            <p>
              Real estate is a crowded field. But with the number of buyers
              purchasing homes through real estate agent and brokers growing 18%
              since 2001, there’s Real estate is a crowded field
            </p>
            <div className='btn-row'>
              <button className='booknow'>Book now</button>
              <button className='explore'>
                Explore
                <span className='arrow-icon'>
                  <img src={arrowRight} alt='' />
                </span>
              </button>
            </div>
          </div>
          <div className='images' ref={(el) => (images = el)}>
            <div className='image-container'>
              <div className='image-right'>
                <img src={rightImg} alt='' />
              </div>
            </div>
            <div className='image-container'>
              <div className='image-left'>
                <img src={leftImg} alt='' />
              </div>
            </div>
            <div className='ellipse1'>
              <img src={ellipse1} alt='' />
            </div>
            <div className='ellipse2'>
              <img src={ellipse1} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
