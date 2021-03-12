import React from 'react';
import PropTypes from 'prop-types';

const LogoUser = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    className={className}
  >
    <circle cx="25" cy="25" r="25" fill="#3C3E4B" />
    <path
      d="M25 15C22.0922 15 19.7266 17.3657 19.7266 20.2734C19.7266 23.1812 22.0922 25.5469 25 25.5469C27.9078 25.5469 30.2734 23.1812 30.2734 20.2734C30.2734 17.3657 27.9078 15 25 15Z"
      fill="#ECEEF4"
    />
    <path
      d="M31.5612 28.992C30.1174 27.5261 28.2035 26.7188 26.1719 26.7188H23.8281C21.7966 26.7188 19.8826 27.5261 18.4388 28.992C17.0021 30.4507 16.2109 32.3763 16.2109 34.4141C16.2109 34.7377 16.4733 35 16.7969 35H33.2031C33.5267 35 33.7891 34.7377 33.7891 34.4141C33.7891 32.3763 32.9979 30.4507 31.5612 28.992Z"
      fill="#ECEEF4"
    />
  </svg>
);

LogoUser.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

LogoUser.defaultProps = {
  width: 50,
  height: 50,
};

export default LogoUser;
