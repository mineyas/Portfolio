import React from "react";
import NavItem from "./navItem";

import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <ul>
          <NavItem title="A Propos" to="apropos" />
          <NavItem title="Compétences" to="competences" />
          <NavItem title="Expériences" to="experiences" />
          <NavItem title="Projets" to="projets" />
          <NavItem title="Social" to="social" />
        </ul>
      </div>
    );
  }
}

export default Navbar;
