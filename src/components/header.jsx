import React from "react";

import { ReactComponent as Logo } from "../assets/my_unsplash_logo.svg";
import Search from "./search";

const Header = () => {
  const openModal = () => {
    const blackout = document.querySelector(".body-blackout");
    const addPhotoModal = document.querySelector('.add-photo-modal');


    document.body.classList.add("no-scroll");
    blackout.style.display = "block";
    addPhotoModal.style.display = 'block';
  };

  return (
    <div className="header">
      <div className="logo-and-search">
        <Logo />
        <Search />
      </div>
      <button onClick={openModal}>Add a photo</button>
    </div>
  );
};

export default Header;
