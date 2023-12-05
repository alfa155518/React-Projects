
import './App.css';
import Home from './pages/Home';
import Market from './pages/Market';
import Create from './pages/Create';
import Contact from './pages/Contact';
import NftDetails from './pages/NftDetails';
import SellerProfile from './pages/SellerProfile';
import Wallet from './pages/Wallet';
import {Routes,Route} from "react-router-dom"
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/market' element={<Market/>}/>
  <Route path='/market/:id' element={<NftDetails/>}/>
  <Route path='/create' element={<Create/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/seller-profile' element={<SellerProfile/>}/>
  <Route path='/wallet' element={<Wallet/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
