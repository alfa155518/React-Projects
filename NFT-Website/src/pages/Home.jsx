import NavBar from "../components/Nav";
import {Link} from 'react-router-dom'
import LiveActions from "../sections/LiveActions";
import Seller from "../sections/Seller";
import Trending from "../sections/Trending";
import Step from "../sections/Step";









const Home = () => {

    return (
        <div className="container">
        {/* Nav Bar */}
        <NavBar/>
        
        {/* Landing Section */}

        <section className="landing">
        <div className="info">
        <h3> Discover Rar Digital Art And Collect  <span>Sell Extraordinary</span> NFTs</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum hic cumque nostrum itaque cupiditate harum debitis nobis amet ex ipsum?</p>

        <div className="landing-links">
        <ul>
            <li className="btn"> <i className="fa-solid fa-expand"></i>  <Link to={'/market'}>Explore</Link></li>
            <li className="btn"> <i className="fa-solid fa-plus"></i>  <Link to={'/create'}>Create</Link></li>
        </ul>
        </div>
        </div>
        <div className="img">
        <img src={require('../assets/images/hero.jpg')} alt="landing-img"/>
        </div>
        </section>

        {/* Live Section */}

        <LiveActions/>

        {/* Top Seller Section */}
        <Seller/>

        {/* Trending Section */}
        <Trending/>

        {/* Step Section */}
        <Step/>
        </div>
    )

}



export default Home;