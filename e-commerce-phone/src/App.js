
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Search from './components/Search';
import CartInfo from './components/CartInfo';


export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<ProductList/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/result' element={<Search/>}/>
    <Route path='/cart-info' element={<CartInfo/>}/>
    </Routes>
    </>
  );
}


