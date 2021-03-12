import React from "react";
import moment from "moment";
import styles from "./UsersListItem.module.scss";
import StarIcon from "../../components/icons/Star";

const UsersListItem = ({ user, onClick }) => {
  const {
    id,
    name,
    login,
    createdAt,
    bio,
    avatarUrl,
    followers,
    following,
    starredRepositories,
  } = user;
  var start = moment(createdAt);
  var end = moment(new Date());
  return (
    <div
      key={`user-key-${id}`}
      className={styles.userItem}
      onClick={() => onClick(login)}
    >
      <div className={styles.imgWrap}>
        <img className={styles.avatar} src={avatarUrl} alt="avatar-url" />
      </div>
      <div>
        <p className={styles.name}>
          {name} {login}
        </p>
        {bio && <label>{bio}</label>}
        <p>
          <label>A part of github community for: {end.to(start)}</label>
          <div className={styles.labels}>
            <span>He has {followers && followers.totalCount} followers</span>
            <span>And following {following && following.totalCount} users</span>
            <span>
              <StarIcon />
              {starredRepositories.totalCount}
            </span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default UsersListItem;
