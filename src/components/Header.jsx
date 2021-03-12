import React from "react";

function Header(props) {
  return (
    <div>
      <header>
        <a className="site-header__brand" href="/">
          <img className="site-header__logo" src={props.logo} alt="clio logo" />
        </a>
      </header>
    </div>
  );
}

export default Header;
