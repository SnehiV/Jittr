{
  currentUser: {
    id: 1,
    username: "app-academy",
    friendships: {
      friends: ["Yeezy", "Bob"],
      pending_friends: ["Pamela", "Einstein"],
      requested_friends: ["Rihanna"]
    }
  },
  userStats: {
    uniqueDrinks: 3,
    totalDrinks: 5,
    uniqueVenues: 2,
    friends: 5
    ranking: "Super Snob" //possible bonus feature  
  }
  forms: {
    signUp: {errors: ["password not long enough"]},
    logIn: {errors: ["invalid username or password"]},
    checkIn: {errors: ["Not a valid drink"]}
  },
  checkIns: {
    1: {
      username: "DripCoffeeSucks",
      drinkName: "Macchiato",
      rating: 4,
      review: "Really good but a little too much foam.",
      comments: {author: "Bob", body: "What a snob"},
      cheers: 2
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
