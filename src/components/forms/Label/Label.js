import React from 'react';
import styles from './Label.module.scss';
import Info from '../../icons/Info';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Label = ({
  required,
  title,
  label,
  id,
  className,
  classNameSubLabel,
  subLabel,
}) => {
  return (
    <label
      htmlFor={id}
      className={cx(
        {
          required: required,
          title: title,
        },
        styles.label,
        className,
      )}
      data-title={title}
    >
      {label}
      {subLabel && (
        <span className={cx(styles.subLabel, classNameSubLabel)}>
          &nbsp;{subLabel}
        </span>
      )}
      {title && <Info />}
    </label>
  );
};

Label.propTypes = {
  required: PropTypes.bool,
  title: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
