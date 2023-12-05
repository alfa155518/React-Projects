import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "./components/nav.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import HomeProduct from "./components/Home-prodcut";
import Cart from "./pages/Cart";
import Contact from "./components/Contact";
import Favorite from "./pages/Favorite";

function App() {
  // Product In Shop Page
  const [productShop, setProductShop] = useState(HomeProduct);

  // Search By Name Product
  const [searchProduct, setSearchProduct] = useState("");

  // State Of Product In Cart
  let [cart, setCart] = useState([]);

  // State Of Favorite Product
  let [favorite, setFavorite] = useState([]);

  // Function Search By Name
  const searchByName = () => {
    let product = productShop.map((product) => product);
    let filteredByName = product.filter((item) => item.cat === searchProduct);
    setProductShop(filteredByName);
    showErrorOfSearch(searchProduct);
  };

  // Show Error Of Product I Not Found
  const showErrorOfSearch = (searchProduct) => {
    if (searchProduct.length === 0) {
      alert("Item Not Found");
    }
  };

  // Reset Search Of Product
  useEffect(() => {
    setProductShop(HomeProduct);
  }, [searchProduct]);

  // Add Product To Cart
  const addToCart = (product) => {
    const exit = cart.find((item) => {
      return item.id === product.id;
    });
    if (exit) {
      alert("Product Already Added To Cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added To Cart");
    }
  };

  // Add Product Favorite
  const addToFavorite = (product) => {
    const exit = favorite.find((item) => {
      return item.id === product.id;
    });

    if (exit) {
      alert("Product Was Added");
    } else {
      setFavorite([...favorite, { ...product }]);
      alert("Product Added To Favorite");
    }
  };

  return (
    <>
      <Header
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
        searchByName={searchByName}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} addToFavorite={addToFavorite} />}
        />
        <Route
          path="/shop"
          element={
            <Shop
              productShop={productShop}
              setProductShop={setProductShop}
              addToCart={addToCart}
              addToFavorite={addToFavorite}
            />
          }
        />
        <Route
          path="/favorite"
          element={<Favorite favorite={favorite} setFavorite={setFavorite} />}
        />
        <Route path="/cart" element={<Cart setCart={setCart} cart={cart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
