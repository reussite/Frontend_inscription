import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Mon Application. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
