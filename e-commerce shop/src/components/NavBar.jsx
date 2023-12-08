import { Link, useLocation } from "react-router-dom";
import wishListImg from "../assets/images/cart.svg";

// Links Pages
const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Shop",
    url: "/shop",
  },
  {
    display: "Blog",
    url: "/blog",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const NavBar = ({ showLoginForm }) => {
  const toggleNav = (e) => {
    const navList =
      e.target.parentElement.parentElement.querySelector(".links");
    const navListItem =
      e.target.parentElement.parentElement.querySelectorAll(".links li");
    navList.classList.toggle("active-nav");
    navListItem.forEach((link) => {
      link.addEventListener("click", (e) => {
        navList.classList.remove("active-nav");
      });
    });
  };

  const location = useLocation();

  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <img src={require("../assets/images/apneck.png")} alt="logo" />
        </Link>
      </div>
      <form>
        <input type="search" placeholder="Search" />
        <button>Search</button>
      </form>
      <ul className="links">
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              {
                <Link
                  className={
                    location.pathname === link.url ? "active-link" : null
                  }
                  to={link.url}>
                  {link.display}
                </Link>
              }
            </li>
          );
        })}
      </ul>
      <div className="side-left-nav">
        <i className="fa-regular fa-user" onClick={() => showLoginForm()}></i>
        <Link to={"/cart"}>
          <img src={wishListImg} alt="cart-img" />
        </Link>
        <span>0</span>
      </div>
      <div className="bars" onClick={(e) => toggleNav(e)}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  );
};

export default NavBar;
