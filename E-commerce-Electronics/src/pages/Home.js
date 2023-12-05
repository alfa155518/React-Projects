import { Link } from "react-router-dom";
import Trending from "./Trending-product";
import Testimonials from "../components/Testimonials";
import Banners from "../components/Banners";
import ProductType from "../components/ProductType";
import Footer from "../components/Footer";

const Home = ({ addToCart, addToFavorite }) => {
  return (
    <>
      {/*  Home Page */}
      <div className="home">
        <div className="container">
          <div className="banner-home">
            <span>Silver Aluminum</span>
            <h2>Apple Watch</h2>
            <p>30% Of Your First Order</p>
            <Link to="/shop" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/*  Container Trending Product & Testimonials Component */}
      <div className="container container-trending">
        <Trending addToCart={addToCart} addToFavorite={addToFavorite} />
        <Testimonials />
      </div>

      {/* Banners Component */}
      <Banners />

      {/* Product Type Component */}
      <ProductType addToCart={addToCart} addToFavorite={addToFavorite} />

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Home;
