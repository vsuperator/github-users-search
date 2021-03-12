import React from "react";
import PropTypes from "prop-types";

const ThreeDotsLoadingIcon = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 100 100`}
    className={className}
  >
    <circle cx="84" cy="50" r="0.473502" fill="#8e8e8e">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="0.5s"
        calcMode="spline"
        keyTimes="0;1"
        values="8;0"
        keySplines="0 0.5 0.5 1"
        begin="0s"
      ></animate>
      <animate
        attributeName="fill"
        repeatCount="indefinite"
        dur="2s"
        calcMode="discrete"
        keyTimes="0;0.25;0.5;0.75;1"
        values="#8e8e8e;#8e8e8e;#8e8e8e;#8e8e8e;#8e8e8e"
        begin="0s"
      ></animate>
    </circle>
    <circle cx="16" cy="50" r="7.5265" fill="#8e8e8e">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;8;8;8"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      ></animate>
    </circle>
    <circle cx="47.9876" cy="50" r="8" fill="#8e8e8e">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;8;8;8"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.5s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.5s"
      ></animate>
    </circle>
    <circle cx="81.9876" cy="50" r="8" fill="#8e8e8e">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;8;8;8"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1s"
      ></animate>
    </circle>
    <circle cx="16" cy="50" r="0" fill="#8e8e8e">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;8;8;8"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.5s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.5s"
      ></animate>
    </circle>
  </svg>
);

ThreeDotsLoadingIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

ThreeDotsLoadingIcon.defaultProps = {
  width: 50,
  height: 50,
};

export default ThreeDotsLoadingIcon;
