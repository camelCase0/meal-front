import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchBar = ({ searchItems }) => {
  const location = useLocation();
  if (location.pathname === "/dishes")
    return (
      <form className="search">
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="search"
          placeholder="Start typing.."
          onChange={(e) => searchItems(e.target.value)}
        ></input>
      </form>
    );
  return (
    <Link to="/dishes">
      <button className="btn btn-none">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </Link>
  );
};
export default SearchBar;
