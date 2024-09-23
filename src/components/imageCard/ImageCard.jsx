import React from 'react';
import { Card, Button } from 'react-bootstrap';
import imgProducto from '../../assets/images/imgProducto.jpeg';

const ImageCard = () => {
  return (
    <Card style={{ width: '18rem', color: 'blue'}}>
      <Card.Img variant="top" src={imgProducto} alt="Card image" />
      <Card.Body>
        <Card.Title>¿Por qué comprar Balsolac?</Card.Title>
        <Card.Text style={{ color: 'blue'}}>
        Tenemos responsabilidad ambiental.
                    •Ecofriemdly .
                    •No está testado en animales.
                    •Proporciona brillo e hidrata.
                    •Funcion anticaspa/anti caida.
        </Card.Text>
       {/*  <Button variant="primary">Leer más</Button> */}
      </Card.Body>
    </Card>
    
  );
};

export default ImageCard;
