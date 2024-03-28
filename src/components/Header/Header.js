import React from "react";
import TwitterLogo from "../../assets/img/twitter-logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="Tweets Simulator"></img>
      <h1>Tweets Simulator</h1>
    </div>
  );
};

export default Header;
