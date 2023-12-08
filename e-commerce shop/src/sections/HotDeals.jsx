const HotDeals = () => {
  return (
    <>
      <div className="head-section">
        <h3>Hot Deals</h3>
      </div>
      <section className="hot-deals">
        <div className="card ">
          <img
            src={require("../assets/images/banner/b10.jpg")}
            alt="blog-img"
          />
          <div className="info">
            <h5 className="card-name">Hot Deals</h5>
            <h2 className="card-title">Buy One get One free.</h2>
            <p className="card-info">
              The latest best collection in our closet <br />
              Feel Cute with our outfits
            </p>
            <span className="btn">learn more</span>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../assets/images/banner/b16.jpg")}
            alt="blog-img"
          />
          <div className="info">
            <h5 className="card-name">Season-In</h5>
            <h2 className="card-title">All Weather Attire</h2>
            <p className="card-info">
              It never matter which season it is <br />
              We got you covered
            </p>
            <span className="btn">learn more</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDeals;
