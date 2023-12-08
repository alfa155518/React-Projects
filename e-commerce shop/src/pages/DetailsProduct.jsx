import { useState } from "react";
import "../css/shop.css";

import { PRODUCTS } from "../data/products";

const DetailsProduct = ({ productDetails }) => {
  let { image, brand, name, price, rate } = productDetails;

  let [moreProduct, setMoreProduct] = useState([...PRODUCTS]);

  // Show 6 Product By Page number
  let filteredProducts = moreProduct.filter((product) => {
    return product.page === "2";
  });

  // Change Product Details To Another Product
  const changeProduct = (e, productTarget) => {
    let newProduct = filteredProducts.find((product) => {
      return product === productTarget;
    });

    let { image, brand, name, price, rate } = newProduct;

    // change Img
    productDetails.image = image;
    // change Brand
    productDetails.brand = brand;
    // change Name
    productDetails.name = name;
    // change Price
    productDetails.price = price;
    // change Rate
    productDetails.rate = rate;

    setMoreProduct(filteredProducts);
  };

  // R-direct To Shop Page
  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === "F5") {
      window.location.pathname = "/shop";
    }
  });

  return (
    <section className="product-details">
      <div className="image">
        <img src={image} alt="product img" />
      </div>

      {/* Details Product */}
      <div className="details">
        <h4 className="brand">brand: {brand}</h4>
        <h2 className="name">{name}</h2>
        <p className="price">
          <strong>Price: ${price}</strong> <strike>${price * 2}</strike>
        </p>
        {rate === undefined ? null : <span className="rate">{rate}</span>}
        <p className="info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          voluptatum nesciunt tenetur deleniti provident enim ut suscipit
          reprehenderit quaerat reiciendis.
        </p>

        {/* More Product Item */}
        <>
          <div className="head-section">
            <h3>More products</h3>
            <p>You might also like these</p>
          </div>
          <div className="more-products">
            {filteredProducts.map((product) => {
              return (
                <div key={product.id} className="product">
                  <img
                    src={product.image}
                    alt="product-img"
                    onClick={(e) => changeProduct(e, product)}
                  />
                </div>
              );
            })}
          </div>
        </>
      </div>
    </section>
  );
};

export default DetailsProduct;
