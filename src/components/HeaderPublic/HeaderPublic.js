import React from 'react';
import styles from './HeaderPublic.module.scss';
import LogoPublic from '../icons/LogoPublic';
import cx from 'classnames';

const HeaderPublic = ({ className }) => {
  return (
    <header className={styles.headerPublic}>
      <div className={cx(styles.containerPublic, className)}>
        <LogoPublic />
        <p className={styles.title}>GitHub User Search Test Task</p>
      </div>
    </header>
  );
};

export default HeaderPublic;
