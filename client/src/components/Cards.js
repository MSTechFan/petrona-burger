import { hide } from '@popperjs/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { productListAPI } from '../productListAPI'

/* const Cards = (props) => {
  
  return (
    <div className="card" style={{width: "100 vw", height: "20rem", marginTop: "10px"}}>
        <img src={props.image} style={{width: "100%", height: "220px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <Link to="products/news" className="btn btn-primary">Ir</Link>
        </div>
    </div>
  )
} */
const News = productListAPI.news.slice(-4)
export const Cards = News.map(ele => {
  return (
    <div className="card" style={{width: "350px", height: "20rem", marginTop: "10px"}}>
      <img src={ele.img} style={{width: "100%", height: "220px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
          <h5 className="card-title">{ele.name}</h5>
          <Link to="products/news" className="btn-primary">Ir</Link>
      </div>
    </div>
  )
})