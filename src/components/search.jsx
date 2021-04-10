import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    props.setQuery(e.target.value);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="Search by name" onChange={handleChange} />
    </form>
  );
};

export default Search;
