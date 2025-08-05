import React from "react";
import siteIcon from "../../assets/site-logo.png";
import accountIcon from "../../assets/mdi_account-alert-outline.svg";
import searchIcon from "../../assets/akar-icons_search.svg";
import heartIcon from "../../assets/akar-icons_heart.svg";
import cartIcon from "../../assets/ant-design_shopping-cart-outlined.svg";

import "./Header.css";
import { NavLink } from "react-router-dom";

interface Props {
  onCartClick: () => void;
}
const Header: React.FC<Props> = ({ onCartClick }) => {
  return (
    <header className="flex-align-center">
      <div className="header-container flex-center-between">
        <div className="site-logo-container">
          <img className="site-logo" src={siteIcon} />
        </div>
        <div className="navlinks flex-align-center fs-base">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/shop">
            Shop
          </NavLink>
          <NavLink className="nav-item" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="icons-container flex-align-center">
          <img src={accountIcon} />
          <img src={searchIcon} alt="" />
          <img src={heartIcon} alt="" />
          <img
            src={cartIcon}
            alt="Cart"
            onClick={onCartClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
