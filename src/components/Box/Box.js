import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Box.module.scss";

const Box = ({ className, children }) => (
  <div className={cx(styles.box, className)}>{children}</div>
);

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Box;
