{
  currentUser: {
    id: 1,
    username: "app-academy"
    <!-- friendships: {
      friends_ids: [2, 3],
      pending_friends_ids: [4, 5],
      requested_friends_ids: [6]
    } -->
  },
  friendships: {
    friends: [{id: 2, username: 'Yeezy'}, {id: 3, username: 'Bob'}],
    pending_friends: [{id: 4, username: 'Einstein'}, {id: 5, username: 'Drake'}],
    requested_friends: [{id: 6, username: 'Rihanna'}]
  },
  userStats: {
    uniqueDrinks: 3,
    totalDrinks: 5,
    uniqueVenues: 2,
    friends: 5
    ranking: "Super Snob" //possible bonus feature  
  },
  forms: {
    signUp: {errors: ["password not long enough"]},
    logIn: {errors: ["invalid username or password"]},
    checkIn: {errors: ["Not a valid drink"]}
  },
  checkIns: {
    1: {
      username: "DripCoffeeSucks",
      user_id: 8,
      drinkName: "Macchiato",
      rating: 4,
      review: "Really good but a little too much foam.",
      comments: {author: "Bob", body: "What a snob"},
      loves: 2
    }
  },
  drinks: {
    1: {
      drinkName: "Macchiato",
      brewStyle: espresso, // for use with bonus feature
      beanCountry: "Ethiopia" // ^^^
    }
  }
  locations: { // for bonus features
    1: {
      place: "Working girl cafe",
      location: {lat: 37, lng: 120}
    }
  }
}
