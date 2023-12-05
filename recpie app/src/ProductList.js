import { useState } from "react"
import { useEffect } from "react"
import Product from "./Product"





export default function ProductList() {

    let [product,setProduct] = useState([])
    let [search, setSearch] = useState('')
    let [current, setCurrent] = useState('banana')


    const idApp = '031302a1'
    const appKey = '9a73ee0c7e26207188bf7430405c8d29'
    const apiUrl = `https://api.edamam.com/search?q=${current}&app_id=${idApp}&app_key=${appKey}`
    
    
    useEffect(() => {
      SendData()
    },[current])
    
    let SendData = async () => {
        
        await fetch(`${apiUrl}`)
        .then(res =>  res.json())
        .then(data => setProduct(data.hits))
    }


    const Search = (e) => {
        e.preventDefault();
        setCurrent(search)
        
    }




    let productValue = product.map(product => product.recipe)



    return (
        <>
        <form onSubmit={Search}>
        <input type="text" value={search} onInput={(e) => setSearch(e.target.value)}/>
        <button type="submit">Search</button>
        </form>
        
        <div className="all-products">
            <Product product={productValue}/>
        </div>
        </>
    )


}