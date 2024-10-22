import "./Header.css";
import imgLogo from "../../assets/images/Logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-dark " >
      <Container>
        <Navbar.Brand href="#home"><img src={imgLogo} className="header_logo" width="30" height="24" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white" }}/>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto" >
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#producto">Producto</Nav.Link>
            
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#emprende"> Emprende con Nosotros</Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </>
  );
}

export default Header;
