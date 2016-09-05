import {FriendshipConstants, requestFriend, respondToRequest,
        removeFriend, requestFriendshipData,
        receiveFriendshipData, receiveErrors} from '../actions/friendship_actions';

import { friendRequest, requestResponse, fetchFriendships,
        deleteFriend} from '../util/friendship_api_util';


const FriendshipMiddleware = store => next => action => {
 let success = (friendshipData) => store.dispatch(receiveFriendshipData(friendshipData));
 let error = (errors) => store.dispatch(receiveErrors(errors));

 switch (action.type) {
   case FriendshipConstants.REQUEST_FRIEND:
     friendRequest(success, action.friendshipParams, error);
     break;
   case FriendshipConstants.RESPOND_TO_REQUEST:
     requestResponse(success, action.friendshipParams, error);
     break;
   case FriendshipConstants.REMOVE_FRIEND:
     deleteFriend(success, action.friendshipParams, error);
     break;
   case FriendshipConstants.REQUEST_FRIENDSHIP_DATA:
     fetchFriendships(success, error);
     break;
   default:
     return next(action);
 }
};

export default FriendshipMiddleware;
