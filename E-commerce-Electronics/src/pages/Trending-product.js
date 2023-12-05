import { useState } from "react";

import { Link } from "react-router-dom";
import HomeProduct from "../components/Home-prodcut";

// Product Detail
let productDetail;

const Trending = ({ addToCart, addToFavorite }) => {
  let [TrendingProduct, setTrendingProduct] = useState(HomeProduct);

  // Filter Product By The Type
  const FilterProduct = (e) => {
    let ele = e.target.innerHTML;
    let product = HomeProduct.map((item) => item);
    let filteredProduct = product.filter((item) => item.type === ele);
    setTrendingProduct(filteredProduct);
  };

  // Show All Product
  const FilterAll = () => {
    let product = HomeProduct.map((item) => item);
    setTrendingProduct(product);
  };

  // Toggle Product Details
  let [showDetail, setShowDetail] = useState(false);

  // Function Show Product Details
  const showDetailContainer = (product) => {
    const { name, price, image, cat } = product;
    setShowDetail(true);
    productDetail = (
      <div className="container">
        <div className="details">
          <div className="container-img">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <span># {cat}</span>
            <h2>{name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque cumque, quaerat iste quis odio saepe! Eaque corrupti
              dignissimos dolorem esse?
            </p>
            <span className="price">Price: ${price}</span>
          </div>
        </div>
      </div>
    );
  };

  // Remove Detail Product
  const removeProductDetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      {/* Show Details Product */}
      {showDetail ? (
        <div className="product-detail">
          <button
            className="btn-remove"
            onClick={(e) => removeProductDetail(e)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          {productDetail}
        </div>
      ) : null}
      <div className="container container-product">
        <div className="trending-nav">
          <h3>trending product</h3>
          <ul>
            <li onClick={() => FilterAll()}>
              <Link>All</Link>
            </li>
            <li onClick={(e) => FilterProduct(e)}>
              <Link>New</Link>
            </li>
            <li onClick={(e) => FilterProduct(e)}>
              <Link>Featured</Link>
            </li>
            <li onClick={(e) => FilterProduct(e)}>
              <Link>Top Sealing</Link>
            </li>
          </ul>
        </div>
        <div className="home-product">
          {/* all Product */}
          {TrendingProduct.map((item, i) => {
            return (
              <div className="product" key={i}>
                <img src={item.image} alt="" className="trend-img" />
                <p className="name">{item.name}</p>
                <span className="price">Price:{item.price}</span>
                <button className="btn" onClick={() => addToCart(item)}>
                  Add To Cart
                </button>
                <div className="action">
                  <i
                    className="fa-regular fa-eye show-element"
                    onClick={() => showDetailContainer(item)}></i>
                  <i
                    className="fa-regular fa-heart favorite"
                    onClick={() => addToFavorite(item)}></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Trending;
