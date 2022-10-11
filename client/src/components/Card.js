import { hide } from '@popperjs/core'
import React from 'react'

const Card = () => {
  return (
    <div className="card" style={{width: "100 vw", height: "20rem", marginTop: "10px"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Ir</a>
        </div>
    </div>
  )
}

export default Card