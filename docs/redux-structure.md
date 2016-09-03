#Auth Cycles

Session API Request Actions

  signUp
    invoked from SplashPage onSubmit

    POST /api/users is called.
    receiveCurrentUser is set as the success callback.

  signIn
    invoked from SplashPage onSubmit

    POST /api/session is called.
    receiveCurrentUser is set as the callback.

  logOut
    invoked from User dropdown onClick

    DELETE /api/session is called.
    removeCurrentUser is set as the success callback.

  fetchCurrentUser
    invoked from App in didMount
    GET /api/session is called.

    receiveCurrentUser is set as the success callback.
    Session API Response Actions

Session API Response Actions

  receiveCurrentUser
    invoked from an API callback
    the SessionReducer stores currentUser in the application's state.

  removeCurrentUser
    invoked from an API callback
    the SessionReducer removes currentUser from the application's state.


#Error Cycles

Error API Response Actions

  setErrors
    invoked from API callbacks on error for actions that generate POST requests
    the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms

  removeErrors
    invoked from API callbacks on success for actions that generate POST requests
    the ErrorReducer removes errors for a given form in the application's state.

#checkIn Cycles

checkIn API Request Actions

  fetchCheckIns

    -invoked from checkInFeed didMount/willReceiveProps
    -GET /api/checkIns is called.
    -format api response so only currentUser and friend checkIns are returned
    -receiveCheckIns is set as the success callback.

  <!-- fetchUserCheckIns

    -invoked from UserProfile didMount/willReceiveProps
    -GET /api/checkIns/:user_id is called.
    -receiveCheckIns is set as the success callback. -->

  createCheckIn
    -invoked from Check In button onClick
    -POST /api/checkIns is called.
    -receive is set as the success callback.
      receiveSingleCheckIn

  destroyCheckIn
    -invoked from delete note button onClick
    -DELETE /api/checkIns/:id is called.
    -removecheckIn is set as the success callback.


checkIn API Response Actions

  receiveCheckIns

    -invoked from an API callback
    -the checkInReducer updates checkIns in the application's state.

  receiveSingleCheckIn

    -invoked from an API callback
    -the checkInReducer updates checkIns in the application's state.

  removeCheckIn

    -invoked from an API callback
    -the checkInReducer removes checkIns[id] from the application's state.



#Friend cycles

Friend API request actions

  fetchFriends
    -invoked from the didMount of Home Component
    -GET /api/friendships/:user_id is called
    -receiveFriendData is set as success callback

  addFriend
    -invoked from the 'Add Friend' button from user profile onClick
    -POST /api/friendships is called
    -receiveRequestedFriend is set as success callback

  acceptFriend
    -invoked from button on FriendRequests component onClick
    -PATCH /api/friendships/:user_id is called
    -receiveFriend is set as success callback

  removeFriend
    -invoked from a 'Remove Friend' button from a user profile onClick
    -DELETE /api/friendships/user_id is called
    -removeFriend is set as success callback

Friend API receive actions

  receiveFriendData
    -invoked from an API callback
    -friendReducer adds friend data to currentUser.friendships

  receiveRequestedFriend
    -invoked from an API callback
    -the friendReducer adds user to currentUser.friendships.pending_friends

  receiveFriend
    -invoked from an API callback
    -the friendReducer adds user to currentUser.friendships.friends

  removeFriend
    -invoked from an API callback
    -the friendReducer removes user from currentUser.friendships.friends

#Drink Cycles
#(I'll add have a bunch of drinks as seed data first. Implement addDrink as bonus)
Drink API Request Actions

  fetchDrinks
    -invoked on didMount of Home Component
    -GET /api/drinks is called
    -receiveDrinkData is called as success callback

  addDrink (bonus)
    -invoked from button in navigation component or checkIn component onClick
    -POST /api/drinks is called
    -receiveDrink is called as success callback

Drink API Receive Actions

  receiveDrinkData
    -invoked from an API callback
    -the drinkReducer will add the drinks to state

  receiveDrink
    -invoked form an API callback
    -drinkReducer will ass drink to state


#Location Cycles
#(I'll add have a bunch of locations as seed data first. Implement addLocation as bonus)
    Location API Request Actions

      fetchDrinks
        -invoked on didMount of Home Component
        -GET /api/locations is called
        -receiveLocationData is called as success callback

      addLocation (bonus)
        -invoked from button in navigation component or checkIn component onClick
        -POST /api/locations is called
        -receiveLocation is called as success callback

    Location API Receive Actions

      receiveLocationData
        -invoked from an API callback
        -the drinkReducer will add the locations to state

      receiveLocation
        -invoked form an API callback
        -drinkReducer will ass drink to state
