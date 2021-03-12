import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import styles from './PlainButton.module.scss';
import ThreeDotsLoadingIcon from '../icons/ThreeDotsLoadingIcon';

const PlainButton = ({
  className,
  id,
  loading,
  children,
  disabled,
  onClick,
  label,
  type,
  ...props
}) => {
  return (
    <button
      className={cx(styles.button, className)}
      disabled={disabled || loading}
      onClick={onClick}
      id={id}
      type={type}
      {...props}
    >
      {loading ? <ThreeDotsLoadingIcon /> : children}
      {!loading && label && label}
    </button>
  );
};

PlainButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PlainButton.defaultProps = {
  type: 'submit',
};

export default PlainButton;
