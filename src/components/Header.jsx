import React from "react";
import Button from "./Button";

function Header(props) {
  return (
    <div className="site-header">
      <header>
      <div className="site-header__navGroup">
        <a className="site-header__brand" href="/">
          <img className="site-header__logo" src={props.logo} alt="clio logo" />
        </a>
          <p className="site-header__navTitle">Products <img className="site-header__navArrow" src={props.rightArrow} alt="dropdown arrow icon" /></p>
          <p className="site-header__navTitle">Solutions <img className="site-header__navArrow" src={props.rightArrow} alt="dropdown arrow icon" /></p>
          <p className="site-header__navTitle">Pricing </p>
          <p className="site-header__navTitle">Customer Stories</p>
          <p className="site-header__navTitle">Resources <img className="site-header__navArrow" src={props.rightArrow} alt="dropdown arrow icon" /></p>
          <p className="site-header__navTitle">Log in <img className="site-header__navArrow" src={props.rightArrow} alt="dropdown arrow icon" /></p>
          <Button text="Try it Free" className="site-header__try" />
        </div>                          
      </header>
    </div>
  );
}

export default Header;
