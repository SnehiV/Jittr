# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: "Yeezy", password: "password")
User.create!(username: "Travy", password: "password")
User.create!(username: "Weezy", password: "password")
User.create!(username: "Sally", password: "password")
User.create!(username: "Pamela", password: "password")
User.create!(username: "Priyanka", password: "password")
User.create!(username: "Guest", password: "password")
User.create!(username: "Fernando", password: "password")
User.create!(username: "Irina", password: "password")
User.create!(username: "Julius", password: "password")


CheckIn.create!(user_id: 2, drink_name: "Flat White", drink_id: 2, rating: 2, review: "aight", location_name:"Working Girls' Cafe", location_id: 2, username: 'Travy')
CheckIn.create!(user_id: 5, drink_name: "Americano", drink_id: 3, rating: 4, review: "I had two", location_name:"Dancing Goats", location_id: 1, username: 'Pamela')
CheckIn.create!(user_id: 10, drink_name: "Cafe au lait", drink_id: 7, rating: 4, review: "Pretty decent", location_name:"Saint Frank Coffee", username: 'Julius')
CheckIn.create!(user_id: 3, drink_name: "Latte", rating: 3, review: "not bad", location_name:"Caribou", username: 'Weezy')
CheckIn.create!(user_id: 4, drink_name: "Macchiato", drink_id: 5, rating: 5, review: "perfection", location_name:"Octane", username: 'Sally')
CheckIn.create!(user_id: 6, drink_name: "Cappucciuno", drink_id: 1, rating: 3, review: "it as okay", location_name:"Starbucks", username: 'Priyanka')
CheckIn.create!(user_id: 1, drink_name: "Cappucciuno", drink_id: 1, rating: 4, review: "good", location_name:"Specialty's", username: 'Yeezy')
CheckIn.create!(user_id: 9, drink_name: "Americano", drink_id: 3, rating: 3, review: "Not remarkable but it was fine", location_name:"Octane", username: 'Irina')
CheckIn.create!(user_id: 7, drink_name: "Cold Brew", drink_id: 6, rating: 2, review: "The barista needs some practice", location_name:"Octane", username: 'Guest')
CheckIn.create!(user_id: 10, drink_name: "Cold Brew", drink_id: 6, rating: 5, review: "really good", location_name:"Dancing Goats", location_id: 1, username: "Julius")
CheckIn.create!(user_id: 8, drink_name: "Cubano", drink_id: 4, rating: 5, review: "perfection", location_name:"Working Girl Cafe", username: 'Fernando')
CheckIn.create!(user_id: 9, drink_name: "Cold Brew", drink_id: 6, rating: 4, review: "Very refreshing", location_name:"Dancing Goats", location_id: 1, username: 'Irina')
CheckIn.create!(user_id: 6, drink_name: "Cappucciuno", drink_id: 1, rating: 5, review: "much better this time around", location_name:"Starbucks", username: 'Priyanka')
CheckIn.create!(user_id: 7, drink_name: "Cappucciuno", drink_id: 1, rating: 5, review: "delicious", location_name:"Working Girl Cafe", username: 'Guest')
CheckIn.create!(user_id: 1, drink_name: "Americano", drink_id: 3, rating: 5, review: "really fucking good", location_name:"Octane", username: 'Yeezy')
CheckIn.create!(user_id: 2, drink_name: "Flat White", drink_id: 2, rating: 1, review: "tasted like milk", location_name:"Caribou", username: 'Travy')
CheckIn.create!(user_id: 7, drink_name: "Cubano", drink_id: 4, rating: 4, review: "Just what I needed", location_name:"Dancing Goats", location_id: 1, username: 'Guest')
CheckIn.create!(user_id: 8, drink_name: "Macchiato", drink_id: 5, rating: 5, review: "Excellent", location_name:"Octane", username: 'Fernando')
CheckIn.create!(user_id: 9, drink_name: "Macchiato", drink_id: 5, rating: 5, review: "Nothing better than a Macciato at Octane", location_name:"Octane", username: "Irina")
CheckIn.create!(user_id: 10, drink_name: "Cafe au lait", drink_id: 7, rating: 2, review: "Wayyyyyy to much sugar", location_name:"Saint Frank Coffee", username: 'Julius')




Drink.create!(
  name: "Cappucciuno",
  brew_style: "Espresso",
  description: " Italian coffee drink that is traditionally prepared with double espresso, hot milk, and steamed milk foam")

Drink.create!(
  name: "Flat White",
  brew_style: "Espresso",
  description: "The beverage is prepared by pouring microfoam (steamed milk consisting of small, fine bubbles with a glossy or velvety consistency) over a shot of espresso.")

Drink.create!(
  name: "Americano",
  brew_style: "Espresso",
  description: "style of coffee prepared by brewing espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee.")

Drink.create!(
  name: "Cubano",
  brew_style: "Espresso",
  description: "An espresso shot which is sweetened with demerara sugar as it is being brewed, but the name covers other drinks that use Cuban espresso as their base.")

Drink.create!(
  name: "Macchiato",
  brew_style: "Espresso",
  description: "Macchiato, meaning \"stained\", is an espresso with a dash of foamed milk.")

Drink.create!(
  name: "Cold Brew",
  brew_style: "Cold Brew",
  description: "Cold brew, or cold press, is coffee grounds steeped in water at cold or room temperature for an extended period.")

Drink.create!(
  name: "Cafe au lait",
  brew_style: "French Press",
  description: "Coffee with hot milk added")

Drink.create!(
  name: "Turkish",
  brew_style: "Turkish",
  description: "Beans for Turkish coffee are ground to a fine powder. Preparation consists of immersing the coffee grounds in water and heating until it just boils. The coffee and the desired amount of sugar are stirred until all coffee sinks and the sugar is dissolved before boiling.")

Location.create!(
  name: "Dancing Goats",
  address: "101 coffee drive",
  lat: 33.774135,
  lng: -84.367017
)

Location.create!(
  name: "Working Girls' Cafe",
  address: "122 New Montgomery St, San Francisco, CA 94105",
  lat: 37.787227,
  lng: -122.400304
)

Yeezy = User.find(1)
Travy = User.find(2)
Weezy = User.find(3)
Sally = User.find(4)
Pamela = User.find(5)
Priyanka = User.find(6)
Guest = User.find(7)
Fernando = User.find(8)
Irina = User.find(9)
Julius = User.find(10)

Yeezy.friend_request(Travy);
Travy.accept_request(Yeezy);

Yeezy.friend_request(Sally);
Sally.accept_request(Yeezy);

Weezy.friend_request(Yeezy);
Yeezy.accept_request(Weezy);

Priyanka.friend_request(Sally);
Sally.accept_request(Priyanka);

Travy.friend_request(Pamela);

Pamela.friend_request(Yeezy);
Yeezy.accept_request(Pamela);

Yeezy.friend_request(Priyanka);

Priyanka.friend_request(Weezy);

Priyanka.friend_request(Guest);
Yeezy.friend_request(Guest);
Sally.friend_request(Guest);
Irina.friend_request(Guest);
Yeezy.friend_request(Guest);
Fernando.friend_request(Guest);
Julius.friend_request(Guest);
Pamela.friend_request(Guest);

Guest.accept_request(Priyanka);
Guest.accept_request(Fernando);
Guest.accept_request(Pamela);
Guest.accept_request(Julius);
