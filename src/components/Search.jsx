import React from "react";

const Search = ({ search, onChange, className }) => {
  return (
    <form className={className}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
};

export default Search;
