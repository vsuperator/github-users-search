import React from "react";
import styles from "./UsersList.module.scss";
import UsersListItem from "../UsersListItem";
import Pagination from "../Pagination";
import { GITHUB_URL } from "../../constants";

const UsersList = ({
  users,
  pageCount,
  currentPage,
  onPageChange,
  usersCount,
}) => {
  const handleUserClick = (login) => {
    window.open(GITHUB_URL + login);
  };
  return (
    <div>
      <div className={styles.resultsCount}>
        <p>Showing {usersCount} available users results</p>
        {usersCount > 1000 && (
          <span>
            You can see only up to 1000 users, due to the github&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.github.com/en/rest/reference/search#about-the-search-api"
            >
              API limitations
            </a>
          </span>
        )}
      </div>
      <div className={styles.usersList}>
        {users.map((user) => (
          <UsersListItem
            key={`user-${user.id}`}
            user={user}
            onClick={handleUserClick}
          />
        ))}
      </div>
      <Pagination
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default UsersList;
