import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal';
import { GiHamburger } from 'react-icons/gi'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function ShoppingCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const CART = 1
  return (
    
    <>
    <div>
      <GiHamburger style={{height: "30px", width: "30px", cursor: "pointer"}} onClick={handleShow} />
      <Badge bg="secondary">{CART}</Badge>
      <span className="visually-hidden">unread messages</span>
    </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Comprar <Badge bg="secondary">9</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: "#faf0ca"}}>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#faf0ca"}}>
          <div className='row'>
            <div className='col-9'>Combos 1</div>
            <div className='col-3'><BsChevronLeft style={{cursor: "pointer"}} /> {CART} <BsChevronRight style={{cursor: "pointer"}}/></div>
          </div>
          <div className='row mt-5'>
            <div className='col-5'><input type="text" class="form-control" /></div>
            <div className='col-7'>Discount Code</div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#faf0ca"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn-primary" onClick={handleClose}>
            Buy
          </button>
          {/* <Button variant="primary" onClick={handleClose}>
            Buy
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoppingCart