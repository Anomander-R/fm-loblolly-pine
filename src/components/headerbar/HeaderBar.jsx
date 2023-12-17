import React from "react";
import CompanyLogo from "./CompanyLogo.jsx";
import { menu } from "../../constants/menuConstants.js";
import "./headerbar.scss";

const HeaderBar = () => {
  const { home, destination, crew, technology } = menu;

  return (
    <div className="onTop wrapper">
    <nav className="header">
      <CompanyLogo />
      <div className="header__line">
        <hr className="header__extraline" />
      </div>
      <ul className="header__list">
        <li className="header__item">
          <a href="/" className="header__link">
            <span>00</span> {home.toUpperCase()}{" "}
          </a>
        </li>
        <li className="header__item">
          <a href="/destination" className="header__link">
            <span>01</span> {destination.toUpperCase()}
          </a>
        </li>
        <li className="header__item">
          <a href="/crew" className="header__link">
            <span>02</span> {crew.toUpperCase()}
          </a>
        </li>
        <li className="header__item">
          <a href="/technology" className="header__link">
            <span>03</span> {technology.toUpperCase()}
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default HeaderBar;
