import "../css/nav.css";

const Header = () => {
  return (
    <header>
      <div className=" header">
        <div className="offer">The Trending Offers 100% Off</div>
        <div className="header-contact">
          <a href="tel:+1(224)647 848">Call me at +1(224)647 848</a>
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>
          <span>
            <i className="fa-solid fa-phone-volume"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
