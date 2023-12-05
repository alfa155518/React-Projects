import { useState } from "react";
import HomeProduct from "./Home-prodcut";

const ProductType = ({ addToCart, addToFavorite }) => {
  // Filter By Type States
  const [stateNewProduct, setStateNewProduct] = useState(HomeProduct);
  const [stateFeaturedProduct, setStateFeaturedProduct] = useState(HomeProduct);
  const [stateTopProduct, setTopProduct] = useState(HomeProduct);

  // Filtered Variables
  let newProduct = stateNewProduct.filter((product) => product.type === "New");
  let featuredProduct = stateFeaturedProduct.filter(
    (product) => product.type === "Featured"
  );
  let topProduct = stateTopProduct.filter(
    (product) => product.type === "Top Sealing"
  );

  // Filtered By New Product
  const showNewProduct = newProduct.map((product) => {
    return (
      <div className="product" key={product.id}>
        <img src={product.image} alt="product" />
        <div className="info">
          <h2>{product.name}</h2>
          <span className="price">price: ${product.price}</span>
          <div className="actions">
            <i className="fa-regular fa-eye"></i>
            <i
              className="fa-regular fa-heart"
              onClick={() => addToFavorite(product)}></i>
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => addToCart(product)}></i>
          </div>
        </div>
      </div>
    );
  });

  // Filtered By Featured Product
  const showFeaturedProduct = featuredProduct.map((product) => {
    return (
      <div className="product" key={product.id}>
        <img src={product.image} alt="product" />
        <div className="info">
          <h2>{product.name}</h2>
          <span className="price">price: ${product.price}</span>
          <div className="actions">
            <i className="fa-regular fa-eye"></i>
            <i
              className="fa-regular fa-heart"
              onClick={() => addToFavorite(product)}></i>
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => addToCart(product)}></i>
          </div>
        </div>
      </div>
    );
  });

  // Filtered By Top Product
  const showTopProduct = topProduct.map((product) => {
    return (
      <div className="product" key={product.id}>
        <img src={product.image} alt="product" />
        <div className="info">
          <h2>{product.name}</h2>
          <span className="price">price: ${product.price}</span>
          <div className="actions">
            <i className="fa-regular fa-eye"></i>
            <i
              className="fa-regular fa-heart"
              onClick={() => addToFavorite(product)}></i>
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => addToCart(product)}></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h3 className="head-section">Product Type</h3>
      <div className="products-type">
        <div className="box">
          <h3 className="head-section">New Product</h3>
          {showNewProduct}
        </div>
        <div className="box">
          <h3 className="head-section">Featured Product</h3>
          {showFeaturedProduct}
        </div>
        <div className="box">
          <h3 className="head-section">Top Product</h3>
          {showTopProduct}
        </div>
      </div>
    </div>
  );
};

export default ProductType;
