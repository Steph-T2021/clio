import React from "react";
import Button from "./Button";
import arrow from "../assets/icons/arrow.svg";

function Header(props) {
  return (
    <div className="site-header">
      <header>
      <div className="site-header__navGroup">
        <a className="site-header__brand" href="/">
          <img className="site-header__logo" src={props.logo} alt="clio logo" />
        </a>
        <div className="column__one">
          <p className="site-header__navTitle">Products<img className="arrow" src={arrow} alt="arrow"/> </p>
          <p className="site-header__navTitle">Solutions <img  className="arrow" src={arrow} alt="arrow"/> </p>
          <p className="site-header__navTitle">Pricing </p>
          <p className="site-header__navTitle ">Customer Stories</p>
          <p className="site-header__navTitle">Resources<img className="arrow" src={arrow} alt="arrow"/>  </p>
          </div>
          <div className="column__two">
          <p className="site-header__navTitle">Log in<img className="arrow" src={arrow} alt="arrow"/>  </p>
          <Button text="Try it Free" className="site-header__try" />
          </div>
        </div>                          
      </header>
    </div>
  );
}

export default Header;
