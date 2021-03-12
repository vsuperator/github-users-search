import React from 'react';
import styles from '../Footer/Footer.module.scss';
import cx from 'classnames';

const Footer = ({ className }) => {
  return (
    <footer className={cx(styles.footer, className)}>
      <span>Self Dev, Inc., © 2021</span>
      <span>Terms of Use & Privacy Policy</span>
    </footer>
  );
};
export default Footer;
