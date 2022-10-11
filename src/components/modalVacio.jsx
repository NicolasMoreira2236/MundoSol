import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Link } from 'react-router-dom';

function CarritoVacio() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
    <Modal.Dialog >
      <Modal.Header >
        <Modal.Title >Carrito Vacio</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        <p >Su Carrito debe Tener al menos 1 producto</p>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center">
        <Link to="/">
        <button  type="button">Ir a Comprar</button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  );
}

export default CarritoVacio;