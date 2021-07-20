import React from 'react';
import PropTypes from "prop-types";
import FriendListItem from './friendListItem/FriendListItem';
import styles from "./friendList.module.css";

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(({id, avatar, name, isOnline}) => (
<FriendListItem key={id} avatar={avatar} name={name}
isOnline={isOnline} />
            ))}
 
</ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired  
      }),
    ).isRequired,
  };

export default FriendList;
