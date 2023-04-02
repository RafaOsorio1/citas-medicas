import React from "react";
import "../Styles/styles.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="Container-nav">
        <div className="container-title-nav">
          <h1 className="title-nav">Citas</h1>
        </div>
        <div className="container-items-nav">
          <p>Home</p>
          <p>Products</p>
          <p>Works</p>
          <p>Team</p>
          <p>Contacts</p>
        </div>
      </nav>
    </header>
  );
};
