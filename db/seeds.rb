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

CheckIn.create!(user_id: 1, drink_name: "cappciuno", rating: 4, review: "good", location:"specialty's", smiles: 2, username: 'Yeezy')
CheckIn.create!(user_id: 2, drink_name: "flat white", rating: 2, review: "aight", location:"starbucks", smiles: 0, username: 'Travy')
CheckIn.create!(user_id: 1, drink_name: "americano", rating: 5, review: "really fucking good", location:"Octane", smiles: 4, username: 'Yeezy')
CheckIn.create!(user_id: 2, drink_name: "flat white", rating: 1, review: "tasted like milk", location:"caribou", smiles: 4, username: 'Travy')
CheckIn.create!(user_id: 3, drink_name: "regular black", rating: 3, review: "not bad", location:"caribou", smiles: 1, username: 'Weezy')
CheckIn.create!(user_id: 4, drink_name: "macchiato", rating: 5, review: "perfection", location:"Octane", smiles: 4, username: 'Sally')
CheckIn.create!(user_id: 5, drink_name: "americano", rating: 4, review: "I had two", location:"Dancing Goats", smiles: 0, username: 'Pamela')
CheckIn.create!(user_id: 6, drink_name: "cappaciuno", rating: 3, review: "it as okay", location:"starbucks", smiles: 4, username: 'Priyanka')
CheckIn.create!(user_id: 6, drink_name: "cappaciuno", rating: 5, review: "much better this time around", location:"starbucks", smiles: 4, username: 'Priyanka')


Yeezy = User.find(1)
Travy = User.find(2)
Weezy = User.find(3)
Sally = User.find(4)
Pamela = User.find(5)
Priyanka = User.find(6)

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
