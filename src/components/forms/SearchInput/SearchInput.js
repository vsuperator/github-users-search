import React from 'react';
import Input from '../Input';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.scss';
import Search from '../../icons/Search';

const SearchInput = ({ label, name, register, error, id, onChange }) => {
  return (
    <div className={styles.searchInputWrap}>
      <Input
        label={label}
        name={name}
        id={id}
        register={register}
        error={error}
        placeholder="Search"
        className={styles.searchInputContainer}
        classNameInput={styles.searchInput}
        onChange={onChange}
      />
      <Search />
    </div>
  );
};
SearchInput.propTypes = {
  className: PropTypes.string,
};

SearchInput.defaultProps = {};
export default SearchInput;
