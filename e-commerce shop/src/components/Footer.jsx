import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <h2>Contact</h2>
          <li>
            Address: <span>Gotham Town, Noltex, bulding, 2and floor</span>
          </li>
          <li>
            Phone: <span>Call me at +1(224)647 848</span>
          </li>
          <li>
            Hours: <span>From 8 A.m Yo 6 P.m</span>
          </li>
          <li>Follow The Developer</li>
          <ul className="socials">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-discord"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>{" "}
            </li>
          </ul>
        </ul>
        <ul>
          <h2>About</h2>
          <li>About Us</li>
          <li>delivery</li>
          <li>privacy police</li>
          <li>terms & conditions</li>
          <li>free police</li>
        </ul>
        <ul>
          <h2>Account</h2>
          <li>profile</li>
          <li>view cart</li>
          <li>help</li>
          <li>payments</li>
          <li>my wishlist</li>
        </ul>
        <ul>
          <h2>Install App</h2>
          <li>available on google play services & app store</li>
          <li>
            <img
              src={require("../assets/images/pay/play.jpg")}
              alt="img-play-store"
            />
          </li>
          <li>
            <img
              src={require("../assets/images/pay/app.jpg")}
              alt="img-app-store"
            />
          </li>
          <li>payment methods</li>
          <li>
            <img src={require("../assets/images/pay/pay.png")} alt="" />
          </li>
        </ul>
      </footer>
      <div className="copy-right">
        <p>
          © Developed By <span>Ahmed Hassop</span> 2023
        </p>
      </div>
    </>
  );
};

export default Footer;
