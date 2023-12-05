import {useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"






// export default function Cart() {

//     let cartItem = JSON.parse(localStorage.getItem("cart"))
//     console.log(cartItem)
//     let [myCart, setMyCart] = useState(cartItem)

//     const handelDelete = (id) => {
//          let cart = cartItem.filter(item => item.id !== id)
//         if(cartItem) {
//             localStorage.setItem("cart", JSON.stringify(cart))

//         }
//         setMyCart(cart)
//     }
    
  

//     let item = myCart.map((product, index) => <div className="item" key={index}>
//         <img alt="img" src={product.img}/>
//         <span>{product.title}</span>
//         <span className="delete-item" onClick={() => handelDelete(product.id)}>Delete From Cart</span>
//     </div>)
//     return (
//         <div className="items">
//             {item}
//         </div>
//     )
// }






export default function Cart() {
    
    let myData = JSON.parse(localStorage.getItem("cart"))


    let [cart,setCart] = useState(myData)


        const HandelDelete = (id) => {
         let tempItem = cart.filter((item, index) => item.id !== id  )
         let temp = cart.filter((item, index) => index !== id  )
         setCart(...[tempItem,temp])
        if(myData) {
            localStorage.setItem('cart', JSON.stringify(tempItem))
        }
        
        if (myData.length <= 1) {
            console.log(4)
            window.location.pathname = '/'
        }
    }
    

    
    return (
        <div className="items">
            {
                myData &&   cart.map((item, index) => <div key={index} className="item">
                <img alt="img" src={item.img}/>
                <span>{item.title}</span>
                <span className="delete-item" onClick={() => HandelDelete(item.id)}>{item.title}</span>
            </div>) 
            }

                
                    
                
                
                    
                
            
            
        </div>
    )
}