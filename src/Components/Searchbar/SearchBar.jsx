import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder }) => {
  return (
    <>
      <div className="Search">
        <div className="item">
          <input
            type="text"
            id="city"
            name="city"
            placeholder={placeholder}
            className="h-14 w-[400px] pl-14 rounded"
          />
        </div>
      </div>
    </>
  );
};

// Define prop types
SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

// (Optional) Default props
SearchBar.defaultProps = {
  placeholder: "Search...",
};

export default SearchBar;
