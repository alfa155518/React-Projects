import { useState } from "react";
import "../Shop.css";
import HomeProduct from "../components/Home-prodcut";
import Footer from "../components/Footer";

// Product Detail
let productDetail;

const Shop = ({ productShop, setProductShop, addToCart, addToFavorite }) => {
  // Filter Product By Categories
  const FilteredByCategory = (e) => {
    let theWord = e.innerHTML;
    let product = HomeProduct.map((product) => product);
    let filteredByCategory = product.filter((item) => item.cat === theWord);
    setProductShop(filteredByCategory);
  };

  // Show All Product
  const showAllProduct = () => {
    let product = HomeProduct.map((item) => item);
    setProductShop(product);
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
      <div className="container">
        <section className="shop">
          <div className="left-side">
            <div className="all-category">
              <h3 className="side-head-section">All Categories</h3>
              <ul>
                <li onClick={() => showAllProduct()}>ALL</li>
                <li onClick={(e) => FilteredByCategory(e.target)}>tv</li>
                <li onClick={(e) => FilteredByCategory(e.target)}>laptop</li>
                <li onClick={(e) => FilteredByCategory(e.target)}>watch</li>
                <li onClick={(e) => FilteredByCategory(e.target)}>speaker</li>
                <li onClick={(e) => FilteredByCategory(e.target)}>
                  electronic
                </li>
                <li onClick={(e) => FilteredByCategory(e.target)}>headphone</li>
                <li onClick={(e) => FilteredByCategory(e.target)}>phone</li>
              </ul>
            </div>
            <div className="banner-left">
              <img src={require("../image/shop_left.avif")} alt="banner" />
            </div>
          </div>

          <div className="all-products">
            <h3 className="side-head-section">Shop Products</h3>

            <div className="boxes">
              {productShop.map((item, i) => {
                return (
                  <div className="box" key={i}>
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
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
