import {productListData} from '../productListData'


export const ProductList = productListData.map(ele => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p className="card-text">${ele.price}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
        )
})
