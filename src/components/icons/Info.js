import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    className={className}
  >
    <path
      d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm.52 12.747c-.38.063-1.136.221-1.52.253-.325.027-.632-.16-.819-.426a1 1 0 01-.12-.916L7.571 7.5H6c-.001-.866.649-1.504 1.48-1.748.396-.117 1.136-.276 1.52-.252.23.015.632.16.819.426a1 1 0 01.12.916L8.429 11H10a1.77 1.77 0 01-1.48 1.747zM9 5a1 1 0 110-2 1 1 0 010 2z"
      fill="#FF645C"
    />
  </svg>
);

Info.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Info.defaultProps = {
  width: 16,
  height: 16,
};

export default Info;
