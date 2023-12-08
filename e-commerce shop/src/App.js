import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import DetailsProduct from "./pages/DetailsProduct";
import { useState } from "react";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PayMent from "./pages/PayMent";

function App() {
  // State Of Details Of Products
  let [productDetails, setProductDetails] = useState();

  // State Of Product in Cart
  let [productInCart, setProductInCart] = useState([]);

  // Show Product Details
  const showProductDetails = (product) => {
    setProductDetails(product);
  };
  // State Of Alert
  const [myAlert, setAlert] = useState(false);
  const [addToCartAlert, setAddToCartAlert] = useState(false);

  // Add To Cart Function
  const addToCart = (product) => {
    const exit = productInCart.find((item) => {
      return item.id === product.id;
    });

    // Check If Item Is Was Added
    if (exit) {
      setAlert(true);
    } else {
      setAddToCartAlert(true);
      document.documentElement.querySelector(".side-left-nav span").innerHTML++;
      setProductInCart([...productInCart, { ...product, qty: 1 }]);
    }
  };

  const removeProductAlert = () => {
    setAlert(false);
    setAddToCartAlert(false);
  };

  // Rest Scroll
  const restScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // Show And Hide Scroll
  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 800) {
      document.documentElement
        .querySelector(".scroll-top")
        .classList.add("show-scroll-arrow");
    } else {
      document.documentElement
        .querySelector(".scroll-top")
        .classList.remove("show-scroll-arrow");
    }
  });

  // Show Login Form Section
  const showLoginForm = () => {
    document.documentElement
      .querySelector(".sighup")
      .classList.toggle("show-login-form");
  };

  return (
    <>
      {/* Set Alert item Added*/}

      {myAlert && (
        <div className="product-alert">
          this Product Was Added in Cart
          <i
            className="close-btn fa-solid fa-close"
            onClick={() => removeProductAlert()}></i>
        </div>
      )}
      {addToCartAlert && (
        <div className="added-product-alert">
          Product Added To Cart
          <i
            className="close-btn fa-solid fa-close"
            onClick={() => removeProductAlert()}></i>
        </div>
      )}

      {/* Scroll To Top */}
      <div className="scroll-top" onClick={() => restScroll()}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>

      {/* Header Section */}
      <Header />

      {/* Sign up Section */}
      <section className="sighup">
        <form>
          <label htmlFor="f-name">First Name</label>
          <input type="text" autoComplete="" placeholder="First Name" id="f-name" />
          <label htmlFor="l-name">Last Name</label>
          <input type="text" autoComplete="" placeholder="Last Name" id="l-name" />
          <label htmlFor="mail">Email</label>
          <input type="text" placeholder="enter Email" id="mail" />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            autoComplete=""
            placeholder="Enter Password"
            id="pass"
          />
          <button className="btn">Submit</button>
        </form>
      </section>

      {/* Nav Bar */}
      <NavBar showLoginForm={showLoginForm} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              showProductDetails={showProductDetails}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/shop/details"
          element={<DetailsProduct productDetails={productDetails} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              productInCart={productInCart}
              setProductInCart={setProductInCart}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart/payment" element={<PayMent />} />
      </Routes>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
