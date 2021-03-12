import React from 'react';
import PropTypes from 'prop-types';
import styles from './SwitchBox.module.scss';

import cx from 'classnames';
import { observer } from 'mobx-react';
const SwitchBox = ({
  className,
  disabled,
  id,
  onChange,
  onClick,
  noLabel,
  register,
  name,
  ...props
}) => {
  return (
    <div
      className={cx(
        styles.inputWrap,
        noLabel ? styles.noLabel : styles.withLabel,
        className,
      )}
      onClick={onClick}
    >
      <input
        id={id}
        name={name ? name : id}
        type="checkbox"
        className={styles.input}
        onChange={onChange}
        disabled={disabled}
        ref={register}
        {...props}
      />
      <label
        htmlFor={id}
        data-text-true={noLabel ? '' : 'Yes'}
        data-text-false={noLabel ? '' : 'No'}
      >
        <i />
      </label>
    </div>
  );
};
SwitchBox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
export default observer(SwitchBox);
