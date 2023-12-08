import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { PRODUCTS1 } from "../data/products";

const ShopProduct = ({ showProductDetails, addToCart }) => {
  // Number Of Pagination
  const paginationNumber = [1, 2, 3, 4];

  // Products
  const [products, setProducts] = useState([...PRODUCTS, ...PRODUCTS1]);

  // Function Return All Products
  const allProducts = [...PRODUCTS, ...PRODUCTS1].map((product) => {
    return product;
  });

  // Filtered By PAgination Number
  const changeProducts = (e) => {
    let num = e.target.innerHTML;
    let filteredProducts = [...PRODUCTS, ...PRODUCTS1].filter((product) => {
      return product.page === num;
    });
    setProducts(filteredProducts);
  };

  // Show All Products
  const showAllProducts = () => {
    return setProducts(allProducts);
  };

  return (
    <>
      <h3 onClick={() => showAllProducts()} className="products-title">
        Products
      </h3>
      <div className="products">
        {[...products].map((product) => {
          return (
            <div key={product.id} className="product">
              <img src={product.image} alt="product-img" />
              <div className="info">
                <h5 className="brand">Brand: {product.brand}</h5>
                <h2 className="product-name">{product.name}</h2>
                <ul className="stars">
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </li>
                </ul>
                <div className="prices">
                  <span className="new-price">Price:$ {product.price}</span>
                  <span className="old-price">
                    Old price:$ {product.price * 2}
                  </span>
                </div>
                <Link
                  to={"details"}
                  className="btn show-details"
                  onClick={() => showProductDetails(product)}>
                  View Details
                </Link>
                <button
                  className="btn add-to-cart"
                  onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <section className="pagination">
        <ul>
          {paginationNumber.map((number, i) => {
            return (
              <li onClick={(e) => changeProducts(e)} key={i}>
                {number}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ShopProduct;
