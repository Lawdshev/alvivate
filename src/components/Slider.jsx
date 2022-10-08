import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

function SliderComp() {
   const slides = [
    {
      id: 1,
      image_url : 'https://s.alicdn.com/@sc04/kf/Heac0a2faa6604179a6ddf572319d0370Q.jpg_300x300.jpg',
      overview : 'hot selling breathable steel toe anti-smash PU non-slip lightweight anti-oil safety nurse labor shoes for men industrial',
      title: 'NEW IN MEN COLLECTIONS',
    },
    {
      id: 2,
      image_url : 'https://s.alicdn.com/@sc04/kf/Hceafbaa384ce415c865fac8c9df13fdeB.jpg_300x300.jpg',
      overview : 'Spot ladies new clear crystal heels with open toe PU leather shoes high heels shoes',
      title: 'NEW TREND FOR WOMEN',
    },
    {
      id: 3,
      image_url: 'https://s.alicdn.com/@sc04/kf/Ha16a27656fe2470d91cc14ae2bdb30407.jpg_300x300.jpg_.webp',
      title: 'VISIT STORE FOR MORE',
    },
   ]

  return (<>
    <Carousel style={{backgroundColor:'#120241', height:'60vh'}}>
      {
        slides.map((slide)=>{
          return <Carousel.Item key={slide.id}>
          <img
            className="d-block w-80 h-80"
            src={slide.image_url}
            alt="First slide"
          />   
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.overview}</p>
            <Button>Visit store</Button>
          </Carousel.Caption>
        </Carousel.Item>
        })
      }
    </Carousel>
    </>
  );
}

export default SliderComp;