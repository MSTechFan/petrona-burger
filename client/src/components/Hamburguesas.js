import React from 'react'
import { productListAPI } from '../productListAPI'

export const Hamburguesas = productListAPI.hamburguesas.map(ele => {
  return (
    <div className="card" style={{width: "18rem", margin: 5}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
              <h2 className="card-title">{ele.name}</h2>
              <p className="card-text">{ele.description}</p>
              <a href="#" className="btn btn-primary">Comprar</a>
          </div>
      </div>
  )
})