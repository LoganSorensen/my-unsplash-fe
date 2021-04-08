import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="Search by name" />
    </form>
  );
};

export default Search;
