import { Link } from "react-router-dom"
import  logo from "../logo.svg"


export default function Navbar() {
    return (
        <nav className="nav-bar">
            <>
            <img alt="logo" src={logo}/>
            <Link to={'/'} >Product</Link>
            </>
            <div className="cart-btn">
                <Link to={'cart'}><i className="fas fa-cart-plus"></i></Link>
            </div>
        </nav>
    )
}