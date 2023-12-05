import Logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {


    

    //Function Toggle Nav

    const ShowNav = () => {
        document.querySelector('.navbar').classList.toggle("show-nav");
    }


    return <nav className="navbar">

    <div className='nav-center'>
    <div className='nav-header'>
    <Link to='/'> <img src={Logo} alt='Logo'/></Link>

        <button type='button' className='nav-btn'>
        <i className="fa-solid fa-bars-staggered nav-icon" onClick={ShowNav}></i>
        </button>
    </div>  
        <ul className='nav-links'>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/rooms'>Rooms</Link>
        </li>
        </ul>
    </div>  

    

    </nav>;
};



export default Navbar;