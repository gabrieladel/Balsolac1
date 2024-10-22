import "./ModalContent.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalInst() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
      <Button variant="secondary" size="lg" onClick={handleShow}>
        Modo de uso
      </Button>
      </div>
      <div className="modal" style={{backgroundColor:"gray ", opacity: ".5"}}>
      <Modal  show={show} onHide={handleClose} id="modal">
        
        <Modal.Header closeButton>
        
          <Modal.Title>Modo de uso</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>Para cabellos secos se recomienda utilizar el producto de raices a puntas, y para cabellos mixtos se recomienda utilizar el producto de medios a puntas.
        Luego de lavar el cabello con el shampoo de preferencia con agua tibia/ caliente mojar la pastilla y frotar sobre el cabello, masajear bajo la ducha hasta que no queden restos del productos, secar y a brillar!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
      
        </Modal.Footer>
        
      </Modal>
      </div>
    </>
  );
}

export default ModalInst;