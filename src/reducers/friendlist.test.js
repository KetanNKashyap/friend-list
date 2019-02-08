import friends from './friendlist';
import * as actionTypes from '../constants/ActionTypes';

describe('friends', () => {
    it('should return the initial state', () => {
        expect(friends(undefined, {})).toEqual({
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
        });
    });

    it('should add the correct friend', () => {
        expect(friends({
            friendsById: []
        }, { 
            type: actionTypes.ADD_FRIEND,
            friendPayload: {
                id: 1,
                name: 'KNK',
                sex:'male',
                starred: false
              },
         })).toEqual({
            friendsById: [
                {
                    id: 1,
                    name: 'KNK',
                    sex:'male',
                    starred: false
              }
            ]
        });
    })

    it('should delete the correct friend', () => {
        expect(friends({
            friendsById: [
                     {
                        id: 1,
                        name: 'KNK',
                        sex:'male',
                        starred: false
                  }
                ]
             },
            { 
                type: actionTypes.DELETE_FRIEND,
                id: 1
         })).toEqual({
            friendsById: []
        });
    })

    it('should star the correct friend', () => {
        expect(friends({
            friendsById: [
                     {
                        id: 1,
                        name: 'KNK',
                        sex:'male',
                        starred: false
                  }
                ]
             },
            { 
                type: actionTypes.STAR_FRIEND,
                id: 1
         })).toEqual({
            friendsById: [
                {
                    id: 1,
                    name: 'KNK',
                    sex:'male',
                    starred: true
              }
            ]
        });
    })
});
