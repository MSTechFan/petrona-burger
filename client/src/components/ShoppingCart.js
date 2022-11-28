import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import { GiHamburger } from 'react-icons/gi'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteOneCart, AddOneCart} from '../features/cartSlice'

function ShoppingCart() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Cart = useSelector((state) => state.cart.value)

  const cartQuantity = Cart.reduce((accumulator, curValue) => {
    return accumulator + curValue.quantity
  }, 0)

  const cartPrice = Cart.reduce((accumulator, curValue) => {
    return accumulator + (curValue.price * curValue.quantity)
  }, 0)

  return (
    <>
      <div>
        <GiHamburger style={{height: "30px", width: "30px", cursor: "pointer"}} onClick={handleShow} />
        <Badge bg="secondary">{cartQuantity === 0 ? "" : cartQuantity}</Badge>
        <span className="visually-hidden">unread messages</span>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: "#faf0ca"}}>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#faf0ca"}}>
          {
            Cart.map(product => {
              return (
                <div className='row' key={product.id}>
                  <div className='col-9'>{product.name}</div>
                  <div className='col-3'><BsChevronLeft style={{cursor: "pointer"}} onClick={() => dispatch(DeleteOneCart(product))} /> {product.quantity} <BsChevronRight style={{cursor: "pointer"}} onClick={() => dispatch(AddOneCart(product))}/></div>
                </div> 
              )
            })
          }
          <div className='row mt-3'>
            <div className='col-6'>
              <h4>Total:</h4>
            </div>
            <div className='col-6'>
              <h4>${cartPrice}</h4>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-5'><input type="text" className="form-control" /></div>
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
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoppingCart