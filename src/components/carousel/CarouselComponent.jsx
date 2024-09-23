import React from 'react';
import img4 from '../../assets/images/img.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img3.jpeg';
import img5 from '../../assets/images/img4.jpeg';
import { Carousel } from 'react-bootstrap';
import './CarouselStyles.css'; // Importa tu archivo CSS si es necesario

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Primera Imagen</h3>
          <p>Descripción de la primera imagen.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Segunda Imagen</h3>
          <p>Descripción de la segunda imagen.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Tercera Imagen</h3>
          <p>Descripción de la tercera imagen.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
};

export default CarouselComponent;
