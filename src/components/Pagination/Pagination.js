import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ ...props }) => (
  <ReactPaginate
    {...props}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    containerClassName={styles.containerClassName}
    pageClassName={styles.pageButton}
    breakClassName={styles.break}
    nextClassName={styles.nextButton}
    previousClassName={styles.previousButton}
    activeClassName={styles.paginationPageActive}
  />
);

export default Pagination;
