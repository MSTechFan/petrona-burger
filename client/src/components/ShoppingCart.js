import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal';
import { GiHamburger } from 'react-icons/gi'

function ShoppingCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = 9

  return (
    
    <>
    <div>
      <GiHamburger style={{height: "30px", width: "30px", cursor: "pointer"}} onClick={handleShow} />
      <Badge bg="secondary">{cart}</Badge>
      <span className="visually-hidden">unread messages</span>
    </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Comprar <Badge bg="secondary">9</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoppingCart