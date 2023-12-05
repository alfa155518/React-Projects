import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <nav>
      <div className="user">
        {/* Check If Is Logged In */}
        {isAuthenticated ? (
          <>
            <img src={user.picture} alt="user-img" />
            <span>{user.name}</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-user" />
            <span>Unknown</span>
          </>
        )}
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="offer-nav">Flay 10% Over All Iphone</div>
    </nav>
  );
};

export default Navbar;
