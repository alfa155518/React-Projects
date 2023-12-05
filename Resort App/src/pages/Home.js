import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../pages/Services";
import FeatureRoom from "./FeatureRooms";




const Home = () => {


    return (
        <>
        <Hero>
            <Banner title='Luxurious Rooms' subtitle='Deluxe Rooms Starting At $299'>
            <Link to='/rooms' className="btn-primary">
                Our Rooms
            </Link>
            </Banner>
        </Hero>
            <Services/>
            <FeatureRoom/>
        </>
    )


}




export default Home;