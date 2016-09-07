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


CheckIn.create!(user_id: 1, drink_name: "Cappciuno", rating: 4, review: "good", location:"Specialty's", smiles: 2, username: 'Yeezy')
CheckIn.create!(user_id: 2, drink_name: "Flat White", drink_id: 1, rating: 2, review: "aight", location:"Starbucks", smiles: 0, username: 'Travy')
CheckIn.create!(user_id: 1, drink_name: "Americano", rating: 5, review: "really fucking good", location:"Octane", smiles: 4, username: 'Yeezy')
CheckIn.create!(user_id: 2, drink_name: "Flat White", rating: 1, review: "tasted like milk", location:"Caribou", smiles: 4, username: 'Travy')
CheckIn.create!(user_id: 3, drink_name: "Regular Black", rating: 3, review: "not bad", location:"Caribou", smiles: 1, username: 'Weezy')
CheckIn.create!(user_id: 4, drink_name: "Macchiato", rating: 5, review: "perfection", location:"Octane", smiles: 4, username: 'Sally')
CheckIn.create!(user_id: 5, drink_name: "Americano", rating: 4, review: "I had two", location:"Dancing Goats", smiles: 0, username: 'Pamela')
CheckIn.create!(user_id: 6, drink_name: "Cappaciuno", rating: 3, review: "it as okay", location:"Starbucks", smiles: 4, username: 'Priyanka')
CheckIn.create!(user_id: 6, drink_name: "Cappaciuno", rating: 5, review: "much better this time around", location:"Starbucks", smiles: 4, username: 'Priyanka')
CheckIn.create!(user_id: 7, drink_name: "Cappaciuno", rating: 5, review: "delicious", location:"Working Girl Cafe", smiles: 4, username: 'Guest')
CheckIn.create!(user_id: 7, drink_name: "Cubano", rating: 4, review: "Just what I needed", location:"Dancing Goats", smiles: 4, username: 'Guest')
CheckIn.create!(user_id: 7, drink_name: "Doppio", rating: 2, review: "The barista needs some practice", location:"Octnae", smiles: 4, username: 'Guest')

Drink.create!(name: "Flat White", brew_style: "Coffee", description: "something", check_in_id: 2)


Yeezy = User.find(1)
Travy = User.find(2)
Weezy = User.find(3)
Sally = User.find(4)
Pamela = User.find(5)
Priyanka = User.find(6)
Guest = User.find(7)

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
