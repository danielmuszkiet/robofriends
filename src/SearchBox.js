import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ma2 w-25 br3 tc ba b--gray bg-near-white"
        type="search"
        placeholder="Search robots here"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
