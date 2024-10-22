import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard() {
  return (
    <Card style={{ width: '40rem' }}>
     {/*  <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>¿Por qué comprar Balsolac?</Card.Title>
        <Card.Text>
        <p>
              Tenemos responsabilidad ambiental.</p>
            <li>
              <ol>•Ecofriemdly.</ol>
              <ol>•No está testado en animales.</ol>
              <ol>•Proporciona brillo e hidrata.</ol>
              <ol>•Funcion anticaspa/anti caida.</ol>
            </li>
             <p>Balsolac es un bálsamo capilar elaborado a base de lactosuero.
              Hidrata.
              Controla la caida del cabello y la caspa.
              Estimula el crecimiento.</p> 
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
