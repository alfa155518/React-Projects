const Hero = () => {
  return (
    <section className="hero">
      <div className="box">
        <img
          src={require("../assets/images/icons/icon1.png")}
          alt="img-order"
        />
        <h5>Fast Orders</h5>
      </div>
      <div className="box">
        <img
          src={require("../assets/images/icons/icon2.png")}
          alt="img-order"
        />
        <h5>Quick Shipping</h5>
      </div>
      <div className="box">
        <img
          src={require("../assets/images/icons/icon3.png")}
          alt="img-order"
        />
        <h5>High Saves</h5>
      </div>
      <div className="box">
        <img
          src={require("../assets/images/icons/icon4.png")}
          alt="img-order"
        />
        <h5>24/7 Support</h5>
      </div>
      <div className="box">
        <img
          src={require("../assets/images/icons/icon5.png")}
          alt="img-order"
        />
        <h5>Online Orders</h5>
      </div>
    </section>
  );
};

export default Hero;
