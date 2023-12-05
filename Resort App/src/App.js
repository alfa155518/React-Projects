
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Filtered from './pages/Filterd';





const  App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/rooms/' element={<Rooms/>}/>
      <Route path='/rooms/:single' element={<SingleRoom/>}/>
      <Route path='/rooms/filter' element={<Filtered/>}/>
      <Route path='*' element={<Error/>}/>
    
    </Routes>
    </>
  );
}



export default App;