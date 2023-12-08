import { PRODUCTS } from "../data/products";

const NewArrivals = () => {
  return (
    <>
      <div className="head-section">
        <h3>New Arrivals</h3>
        <p>Your Best Designer Oates</p>
      </div>
      <section className="new-arrivals">
        {PRODUCTS.slice(1, 5).map((featureProduct) => {
          return (
            <div key={featureProduct.id} className="arrival-product">
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

export default NewArrivals;
