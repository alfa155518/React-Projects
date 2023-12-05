import {useEffect, useState } from "react"
import CartInfo from "./CartInfo";




let myData = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];


// export let myArray;
export default function Product({product}) {
    
    const [carts,setCarts] = useState(myData)
    
    const {img,price,title,company} = product
    
 
    
    const addToCart = (product) => {    
        carts.push(product)
        localStorage.setItem(`cart`, JSON.stringify(myData))
    }
    
    

    let showInfo = () => {
        localStorage.setItem('info', JSON.stringify(product))

    }
    
 
    return (<>
        
        <div className="product">
            <img alt="img" src={img}/>
            <span className="title">{title}</span>
            <span className="price">${price}</span>
            <span className="add-to-cart" onClick={() => addToCart(product)}>Add To Cart</span>
            <span className="add-to-cart"  onClick={() => showInfo()}>info</span>
        </div>
    </>
    )
}