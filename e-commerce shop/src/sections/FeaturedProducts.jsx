import { PRODUCTS } from "../data/products";

const FeaturedProducts = () => {
  return (
    <>
      <div className="head-section">
        <h3>Featured Products</h3>
        <p>All Weather Modern Designs</p>
      </div>
      <section className="feature-products">
        {PRODUCTS.slice(2, 6).map((featureProduct) => {
          return (
            <div key={featureProduct.id} className="feature-product">
              <img src={featureProduct.image} alt="product-img" />
              <div className="info">
                <p className="brand">Brand: {featureProduct.brand}</p>
                <h2>{featureProduct.name}</h2>
                <strong>Status: {featureProduct.status}</strong>
                <span>Rate: {featureProduct.rate}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default FeaturedProducts;
