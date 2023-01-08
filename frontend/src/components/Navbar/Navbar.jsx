import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MenuList } from "./MenuList";

import logo from "../../images/cryptohub.png";
import "./Navbar.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const menu = MenuList.map(({ title, url, icon }, index) => {
    return (
      <li key={index}>
        <NavLink className="nav_link" to={url} end>
          {icon}
          {title}
        </NavLink>
      </li>
    );
  });

  let distanceToTop = window.pageYOffset;

  window.addEventListener("scroll", () => {
    distanceToTop = window.pageYOffset;
    if (distanceToTop > 10) setIsTop(false);
    else setIsTop(true);
  });

  return (
    <>
      <header className={isTop ? "" : "scrolled"}>
        <div className="container">
          <div className="header_nav">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
              Crypto<font>Hu₿</font>
            </Link>
            <ul className="nav_ul">{menu}</ul>
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={clicked ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}
                id="icon"
              ></i>
            </div>
          </div>
        </div>
      </header>
      <div className="nav_mobile">
        <ul
          className={clicked ? "nav_mobile-ul active" : "nav_mobile-ul"}
          onClick={handleClick}
        >
          {menu}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
