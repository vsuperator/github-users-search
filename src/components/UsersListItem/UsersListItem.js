import React from 'react';
import styles from './UsersListItem.module.scss';
import moment from 'moment';

const UsersListItem = ({ user }) => {
  const { id, name, login, createdAt, bio, avatarUrl, followers, following } = user;
  var start = moment(createdAt);
  var end   = moment(new Date());
  return (
    <div
      key={`user-key-${id}`}
      className={styles.userItem}
    >
      <div className={styles.imgWrap}>
        <img className={styles.avatar}src={avatarUrl} alt="avatar-url"/>
      </div>
      <div>
        <p className={styles.name}>{name} {login}</p>
          {bio && <div>{bio}</div>}
        <p>
          <div>
            A part of github community for: {end.to(start)}
          </div>
          <div className={styles.labels}>
            <span>He has {followers && followers.totalCount} followers</span>
            <span>And following {following && following.totalCount} users</span>
          </div>
          
      </p>
      </div>
    </div>
  );
};

export default UsersListItem;
