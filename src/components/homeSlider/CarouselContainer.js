import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css'
import image1 from '../../images/enf1.jpg';
import image2 from '../../images/enf2.jpg';
import image3 from '../../images/enf3.jpg';
import image4 from '../../images/enf4.jpg';
import image5 from '../../images/enf5.jpg';
import image6 from '../../images/enf6.jpg';

import ReactPlayer from 'react-player'

const Play = () =>{
  return(
        <ReactPlayer
        url="https://www.youtube.com/watch?v=YtvP5A5OHpU"
        
      />

  );
}
const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false} >
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          height={700}
        />
        <Carousel.Caption>
        <div className='div'><button className="button" onClick={Play}>Decouvrir l'école</button></div>
          <p style={{'fontWeight':"bold",'fontSize':'30px','color':'#4E4E50'}}>Transformez l'avenir de votre enfant avec nous</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          height={700}

        />
        <Carousel.Caption>
        <div className='div'><button className="button" onClick={ Play}>Decouvrir l'école</button></div>
          <p style={{'fontWeight':"bold",'fontSize':'30px','color':'#4E4E50'}}>notre programme est conçu pour renforcer la confiance en soi.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          height={700}

        />
        <Carousel.Caption>
        <div className='div'><button className="button" onClick={Play}>Decouvrir l'école</button></div>
          <p style={{'fontWeight':"bold",'fontSize':'30px','color':'#4E4E50'}}>Voir le potentiel des enfants et non leur handicap.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
          height={700}

        />
        <Carousel.Caption>
        <div className='div'><button className="button" onClick={Play}>Decouvrir l'école</button></div>
          <p style={{'fontWeight':"bold",'fontSize':'30px','color':'#4E4E50'}}>Voir le potentiel des enfants et non leur handicap.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
          height={700}

        />
        <Carousel.Caption>
        <div className='div'><button className="button" onClick={Play}>Decouvrir l'école</button></div>
          <p style={{'fontWeight':"bold",'fontSize':'30px','color':'#4E4E50'}}>Voir le potentiel des enfants et non leur handicap.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src={image6}
          alt="Third slide"
          height={700}

        />
        <Carousel.Caption>
        <div className='div'><button className="button" onClick={Play}>Decouvrir l'école</button></div>
          <p style={{'fontWeight':"bold",'fontSize':'30px','color':'#4E4E50'}}>Voir le potentiel des enfants et non leur handicap.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;