import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Auth0Provider
      domain="dev-aigfioj4xc46qcwx.us.auth0.com"
      clientId="mzPNiDA2hvHbTfYrIURkhhW2khlvKHA1"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <App />
    </Auth0Provider>
  </Router>
);
