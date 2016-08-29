-AuthFormContainer
  -SplashPage
    -AuthForm (sign-in or sign up)

-HomeContainer
  -Home   ()

    <!-- -HeaderContainer -->
      -Header
        -navigation
          -User/ProfilePic
          -SearchBarContainer (bonus)
            -SearchBar

    <!-- -checkInFeedContainer -->
      -checkInFeed
        -checkInItem
          <!-- -Review -->

    <!-- -CheckInContainer (??) -->
      -CheckInForm

    <!-- -FriendRequestsContainer -->
      -FriendRequests
        -FriendRequestItem

    <!-- -UserStatsContainer -->
      -UserStats (with user stats and ranking)

      -Footer


-UserProfileContainer
  -UserProfile
    -Cover
      -UserStatsContainer
    -checkInFeedContainer
    -TopRatedContainer

-FriendsContainer
  -Friends

-TopRatedContainer (Bonus)
  -TopRated
    -TopDrinks
      -DrinkItems
    -TopLocations
      -LocationItems

-TopRankedContainer (Bonus)
  -TopRanked
  -UserStatsContainer





Routes:

path: "/sign-up"       component: "AuthFormContainer"
path: "/sign-in"       component: "AuthFormContainer"
path: "/home"          component: "HomeContainer"
path: "/user/:userId"  component: "UserProfileContainer"
path: "/friends"       component: "FriendsContainer"
path: "/top-rated"     component: "TopRatedContainer"
path: "/top-ranked"    component: "TopRankedContainer"  
