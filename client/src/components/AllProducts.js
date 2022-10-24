import React from 'react'
import { fullListProducts } from '../productListAPI'
import { AiFillPlusCircle } from 'react-icons/ai'

export const AllProducts = fullListProducts.map(ele => {
  return (
    <div className="card" style={{width: "18rem", margin: 5}}>
          <img src={ele.img} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h2 className="card-title">{ele.name}</h2>
              <p className="card-text">{ele.description}</p>
              <AiFillPlusCircle style={{width: "30px", height: "30px"}}/>
          </div>
      </div>
  )
})