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

CheckIn.create!(user_id: 1, drink_name: "cappciuno", rating: 4, review: "good", location:"specialty's", smiles: 2, username: 'Yeezy')
CheckIn.create!(user_id: 2, drink_name: "flat white", rating: 2, review: "aight", location:"starbucks", smiles: 0, username: 'Travy')
CheckIn.create!(user_id: 1, drink_name: "americano", rating: 5, review: "really fucking good", location:"Octane", smiles: 4, username: 'Yeezy')
