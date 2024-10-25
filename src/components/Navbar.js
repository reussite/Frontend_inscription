import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/signup">Inscription</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
