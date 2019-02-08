import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      id: 'theodoreroosevelt',
      name: 'Theodore Roosevelt',
      starred: true,
      sex: 'male'
    },
    {
      id: 'abrahamlincoln',
      name: 'Abraham Lincoln',
      starred: false,
      sex: 'male'
    },
    {
      id: 'georgewashington',
      name: 'George Washington',
      starred: false,
      sex: 'male'
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            ...action.friendPayload
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter(item => item.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find(item => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
