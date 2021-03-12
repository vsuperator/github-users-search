import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
      fill="#8C929E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9572 11.957C12.2501 11.6641 12.7249 11.6641 13.0178 11.957L16.2803 15.2195C16.5732 15.5124 16.5732 15.9872 16.2803 16.2801C15.9874 16.573 15.5126 16.573 15.2197 16.2801L11.9572 13.0176C11.6643 12.7247 11.6643 12.2499 11.9572 11.957Z"
      fill="#8C929E"
    />
  </svg>
);

Search.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Search.defaultProps = {
  width: 18,
  height: 18,
};

export default Search;
