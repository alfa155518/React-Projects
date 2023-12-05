const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left-side">
          <div className="category">
            <div>
              <i className="fa-solid fa-piggy-bank"></i>
            </div>
            <div className="details">
              <h2>Great saving</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, dignissimos.
              </span>
            </div>
          </div>
          <div className="category">
            <div>
              <i className="fa-solid fa-truck"></i>
            </div>
            <div className="details">
              <h2>free delivery</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, dignissimos.
              </span>
            </div>
          </div>
          <div className="category">
            <div>
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="details">
              <h2>24 X 7 support</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, dignissimos.
              </span>
            </div>
          </div>
          <div className="category">
            <div>
              <i className="fa-solid fa-money-check"></i>
            </div>
            <div className="details">
              <h2>money back</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, dignissimos.
              </span>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="head-footer">
            <img src={require("../image/logo.webp")} alt="img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              dignissimos.
            </p>
          </div>
          <div className="links-footer">
            <ul>
              <h4>Your Account</h4>
              <li>About us</li>
              <li>Account</li>
              <li>Payment</li>
              <li>Sales</li>
            </ul>
            <ul>
              <h4>Products</h4>
              <li>Delivery</li>
              <li>Track Order</li>
              <li>New Product</li>
              <li>Old Product</li>
            </ul>
            <ul>
              <h4>Contact Us</h4>
              <li>Silver Business</li>
              <li>4005</li>
              <li>+(0172)199999999</li>
              <li>info@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
