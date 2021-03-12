import React from 'react';
import styles from './Input.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Label from '../Label';

const Input = ({
  id,
  label,
  subLabel,
  name,
  register,
  error,
  className,
  classNameInput,
  classNameLabel,
  classNameSubInput,
  classNameSubLabel,
  classNameError,
  required,
  title,
  subInputText,
  type,
  ...props
}) => {
  return (
    <div className={cx(styles.container, className)}>
      {label && (
        <Label
          id={id}
          required={required}
          label={label}
          title={title}
          className={classNameLabel}
          subLabel={subLabel}
          classNameSubLabel={classNameSubLabel}
        />
      )}
      <div className={styles.inputWrap}>
        <input
          name={name}
          ref={register}
          id={id}
          className={cx(
            { error: error },
            classNameInput,
          )}
          type={type}
          {...props}
        />
      </div>
      {error && (
        <span className={cx(styles.error, classNameError)}>
          {error.message}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
