import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render() {
    const { friend: { name, starred, sex, id } } = this.props;
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div>
            <span>{name}</span>
            <small>({sex})</small>
          </div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.starFriend(id)}>
            <i className={classnames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.deleteFriend(id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired
};

export default FriendListItem
