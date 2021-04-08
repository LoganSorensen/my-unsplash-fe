import React from "react";

import { ReactComponent as Logo } from "../assets/my_unsplash_logo.svg";
import Search from "./search";

const Header = () => {
  const addPhoto = () => {};

  return (
    <div className="header">
      <div className="logo-and-search">
        <Logo />
        <Search />
      </div>
      <button onClick={addPhoto}>Add a photo</button>
    </div>
  );
};

export default Header;
