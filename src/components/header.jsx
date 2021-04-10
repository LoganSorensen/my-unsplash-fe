import React from "react";

import { ReactComponent as Logo } from "../assets/my_unsplash_logo.svg";
import Search from "./search";

const Header = (props) => {
  const openModal = () => {
    const blackout = document.querySelector(".body-blackout");
    const addPhotoModal = document.querySelector(".add-photo-modal");

    document.body.classList.add("no-scroll");

    blackout.style.display = "block";
    blackout.style.top = `${window.scrollY}px`;

    addPhotoModal.style.display = "block";
    addPhotoModal.style.top = `${window.scrollY + window.innerHeight / 4}px`;
  };

  return (
    <div className="header">
      <div className="logo-and-search">
        <Logo />
        <Search setQuery={props.setQuery} />
      </div>
      <button onClick={openModal}>Add a photo</button>
    </div>
  );
};

export default Header;
