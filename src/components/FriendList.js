import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render() {
    const { friends, actions } = this.props
    return (
      <div>
        <ul className={styles.friendList}>
          {
            friends.map((friend, index) => {
              return (
                <FriendListItem
                  key={index}
                  friend={friend}
                  {...actions} />
              );
            })
          }
        </ul>
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
