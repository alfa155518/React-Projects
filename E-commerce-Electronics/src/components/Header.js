import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ searchProduct, setSearchProduct, searchByName }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="container-nav">
      <div className="header-top">
        <Link to="./">
          <img src={require("../image/logo.webp")} alt="logo" />
        </Link>
        <div className="input-search">
          <form>
            <input
              type="text"
              value={searchProduct}
              placeholder="Search"
              onChange={(e) => setSearchProduct(e.target.value)}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={(e) => searchByName(e)}></i>
          </form>
        </div>

        {/* Check If User had Account */}
        {isAuthenticated ? (
          // Log Out
          <button
            className="log-out"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }>
            <i className="fa-solid fa-arrow-left"></i>
            Log-out
          </button>
        ) : (
          // Log In
          <button className="log-out" onClick={() => loginWithRedirect()}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Log-in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
