import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(`Nombre: ${name}, Email: ${email}, Teléfono: ${phone}, Mensaje: ${message}`);
    // Restablecer el formulario si es necesario
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formName">
       {/*  <Form.Label column sm="2">Nombre</Form.Label> */}
        <Col sm="12">
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formEmail">
        {/* <Form.Label column sm="2">Correo Electrónico</Form.Label> */}
        <Col sm="12">
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPhone">
        {/* <Form.Label column sm="2">Teléfono</Form.Label> */}
        <Col sm="12">
          <Form.Control
            type="tel"
            placeholder="Ingresa tu número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formMessage">
        {/* <Form.Label column sm="2">Mensaje</Form.Label> */}
        <Col sm="12">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribe tu mensaje aquí"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Button variant="secondary btn-lg" type="submit" className='button mb-3'>
        Enviar Mensaje
      </Button>
    </Form>
  );
};

export default ContactForm;
