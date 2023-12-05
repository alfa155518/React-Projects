
import { useState } from 'react'
import {StoreProducts} from '../data'
import Product from './Product'




let resultSearch;
let searchMap;
export default function ProductList() {

    const [products, setProducts] = useState([StoreProducts])

    const [search, setSearch] = useState()
    
    const handelSearch = (e) => {
        e.preventDefault()
                searchMap = products[0].map(product => product)
                resultSearch = searchMap.filter(pr => pr.company == search)
                console.log(resultSearch)
                localStorage.setItem("search", JSON.stringify(resultSearch))
                window.location.pathname = '/result'
              
            }
            
            
    

    return (<>
    <form onSubmit={handelSearch}>
        <input type='text'  onChange={(e) => setSearch(e.target.value)} />
        <input type='submit' />
        <h1>{resultSearch}</h1>
    </form>
        <div className='all-products'>
            {products[0].map((product,index) => <div key={index}>
                <Product  product={product}/>
            </div>)}
        </div>
    </>
    )
}







