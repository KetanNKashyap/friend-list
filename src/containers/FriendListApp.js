import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import {PAGE_LIMIT} from '../constants/constants'

class FriendListApp extends Component {

  state = {
    activePage: 1
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.friendlist !== nextProps.friendlist) {
      if (nextProps.friendlist.friendsById &&
        (nextProps.friendlist.friendsById.length <= 2)) {
        this.setState({ activePage: 1 })
      }
      else if (this.props.friendlist.friendsById.length % PAGE_LIMIT) {
        const currentActivePage = (nextProps.friendlist.friendsById.length / PAGE_LIMIT) + 1;
        if (this.state.activePage === currentActivePage) {
          this.setState({ activePage: currentActivePage - 1 })
        }
      }
    }
  }

  handlePageChange = pageNumber => this.setState({ activePage: pageNumber });

  render() {
    const { friendlist: { friendsById } } = this.props;
    const { activePage } = this.state;
    const indexOfLast = activePage * PAGE_LIMIT;
    const indexOfFirst = indexOfLast - PAGE_LIMIT;
    const friendsToDisplay = friendsById.slice(
      indexOfFirst,
      indexOfLast
    );
    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsToDisplay} actions={actions} />
        {friendsById.length > PAGE_LIMIT && <Pagination
          onChange={this.handlePageChange}
          activePage={activePage}
          totalItemsCount={friendsById.length}
          itemsCountPerPage={PAGE_LIMIT}
        />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)
