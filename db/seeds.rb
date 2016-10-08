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

checkins = []

checkins << CheckIn.new(user_id: 5, drink_name: "Americano", drink_id: 3, rating: 4, review: "People say a lot of bad things about Americanos but this is really good.", location_name:"Dancing Goats", location_id: 1, username: 'Pamela')
checkins << CheckIn.new(user_id: 10, drink_name: "Cold Brew", drink_id: 6, rating: 5, review: "I was feeling like having a cold drink and this cold brew was great", location_name:"Dancing Goats", location_id: 1, username: "Julius")
checkins << CheckIn.new(user_id: 7, drink_name: "Cubano", drink_id: 4, rating: 4, review: "Glad tourism to Cuba is about to happen because this coffee is really good", location_name:"Dancing Goats", location_id: 1, username: 'Guest')
checkins << CheckIn.new(user_id: 9, drink_name: "Cold Brew", drink_id: 6, rating: 3, review: "Very refreshing", location_name:"Dancing Goats", location_id: 1, username: 'Irina')

checkins << CheckIn.new(user_id: 2, drink_name: "Flat White", drink_id: 2, rating: 2, review: "It was okay but maybe they shouldn't have rushed it.", location_name:"Working Girls' Cafe", location_id: 2, username: 'Travy')
checkins << CheckIn.new(user_id: 7, drink_name: "Cappucciuno", drink_id: 1, rating: 5, review: "This was the perfect thing to cure the mid-afternoon sleepyness", location_name:"Working Girls' Cafe", location_id: 2, username: 'Guest')

checkins << CheckIn.new(user_id: 10, drink_name: "Cafe au lait", drink_id: 7, rating: 2, review: "Pretty decent", location_name:"Catahoula Coffee Co", location_id: 3, username: 'Julius')
checkins << CheckIn.new(user_id: 4, drink_name: "Cappucciuno", drink_id: 7, rating: 5, review: "Thay really know how to make a good Cappucciuno", location_name:"Catahoula Coffee Co", location_id: 3, username: 'Sally')
checkins << CheckIn.new(user_id: 1, drink_name: "Americano", drink_id: 3, rating: 4, review: "Somehow thay made an Americano palatable. It's still an Americano though.", location_name:"Catahoula Coffee Co", location_id: 3, username: 'Yeezy')
checkins << CheckIn.new(user_id: 3, drink_name: "Guillermo", drink_id: 12, rating: 1, review: "I thought the Guillermo would be as good as the movies that one director makes. Not so.", location_name:"Catahoula Coffee Co", location_id: 3, username: 'Weezy')
checkins << CheckIn.new(user_id: 8, drink_name: "Flat White", drink_id: 2, rating: 5, review: "Wanted something smooth and they made it perfect", location_name:"Catahoula Coffee Co", location_id: 3, username: 'Fernando')

checkins << CheckIn.new(user_id: 5, drink_name: "Macchiato", drink_id: 5, rating: 5, review: "They know how to make the best Macchiatos at Philz", location_name:"Philz Coffee", location_id: 4, username: 'Pamela')
checkins << CheckIn.new(user_id: 4, drink_name: "Zorro", drink_id: 9, rating: 2, review: "Whoever made this better put on a mask like Zorro becuase this was terrible.", location_name:"Philz Coffee", location_id: 4, username: 'Sally')
checkins << CheckIn.new(user_id: 1, drink_name: "Palazzo", drink_id: 13, rating: 4, review: "The perfect drink for a hot day.", location_name:"Philz Coffee", location_id: 4, username: 'Weezy')
checkins << CheckIn.new(user_id: 8, drink_name: "Cafe au lait", drink_id: 7, rating: 3, review: "Fancy name made me think it would be good. It was okay though.", location_name:"Philz Coffee", location_id: 4, username: 'Fernando')

checkins << CheckIn.new(user_id: 6, drink_name: "Cappucciuno", drink_id: 1, rating: 3, review: "The most mediocre cappuciuno I've ever had", location_name:"Kaleidoscope Coffee", location_id: 5, username: 'Priyanka')
checkins << CheckIn.new(user_id: 9, drink_name: "Americano", drink_id: 3, rating: 1, review: "I think they used mop water to make this", location_name:"Kaleidoscope Coffee", location_id: 5, username: 'Irina')
checkins << CheckIn.new(user_id: 6, drink_name: "Guillermo", drink_id: 12, rating: 5, review: "This was absolutely wonderful", location_name:"Kaleidoscope Coffee", location_id: 5, username: 'Priyanka')

checkins << CheckIn.new(user_id: 10, drink_name: "Cappucciuno", drink_id: 1, rating: 5, review: "Of course the Italian cafe can make a good cappucciouno", location_name:"Bel Bacio - Italian Cafe", location_id: 6, username: 'Julius')
checkins << CheckIn.new(user_id: 7, drink_name: "Zorro", drink_id: 9, rating: 4, review: "I've had better but this was really good", location_name:"Bel Bacio - Italian Cafe", location_id: 6, username: 'Guest')
checkins << CheckIn.new(user_id: 6, drink_name: "Flat White", drink_id: 2, rating: 2, review: "If I wanted a cup of milk I would have stayed home.", location_name:"Bel Bacio - Italian Cafe", location_id: 6, username: 'Priyanka')

checkins << CheckIn.new(user_id: 3, drink_name: "Cafe au lait", drink_id: 7, rating: 5, review: "I think I just died and went to coffee heaven", location_name:"Bellano Coffee", location_id: 18, username: 'Weezy')
checkins << CheckIn.new(user_id: 5, drink_name: "Cappucciuno", drink_id: 1, rating: 4, review: "Bellano Coffee can do no wrong", location_name:"Bellano Coffee", location_id: 18, username: 'Pamela')
checkins << CheckIn.new(user_id: 1, drink_name: "Guillermo", drink_id: 12, rating: 3, review: "I probably could have made something just as good at home", location_name:"Bellano Coffee", location_id: 18, username: 'Yeezy')


checkins << CheckIn.new(user_id: 7, drink_name: "Cold Brew", drink_id: 6, rating: 2, review: "The barista needs some practice", location_name:"Octane", location_id: 27, username: 'Guest')
checkins << CheckIn.new(user_id: 9, drink_name: "Macchiato", drink_id: 5, rating: 5, review: "Nothing better than a Macciato at Octane", location_name:"Octane", location_id: 27, username: "Irina")
checkins << CheckIn.new(user_id: 4, drink_name: "Zorro", drink_id: 9, rating: 5, review: "The perfect pick me up after that horrible traffic", location_name:"Octane", location_id: 27, username: 'Sally')
checkins << CheckIn.new(user_id: 8, drink_name: "Macchiato", drink_id: 5, rating: 5, review: "The barita here is so talented.", location_name:"Octane", location_id: 27, username: 'Fernando')
checkins << CheckIn.new(user_id: 1, drink_name: "Americano", drink_id: 3, rating: 5, review: "It wasn't that great but the barista is so cool", location_name:"Octane", location_id: 27, username: 'Yeezy')

checkins << CheckIn.new(user_id: 8, drink_name: "Cubano", drink_id: 4, rating: 5, review: "perfection", location_name:"Spike's Coffees & Tea", location_id: 14, username: 'Fernando')
checkins << CheckIn.new(user_id: 2, drink_name: "Flat White", drink_id: 2, rating: 1, review: "tasted like milk. Maybe I should have got some cookies to go along with it", location_name:"Spike's Coffees & Tea", location_id: 14, username: 'Travy')
checkins << CheckIn.new(user_id: 10, drink_name: "Cafe au lait", drink_id: 7, rating: 2, review: "Wayyyyyy to much sugar", location_name:"Spike's Coffees & Tea", location_id: 14, username: 'Julius')

checkins.shuffle.each{ |checkin| checkin.save}



Drink.create!(name: "Cappucciuno", brew_style: "Espresso with milk", description: "Italian coffee drink that is traditionally prepared with double espresso, hot milk, and steamed milk foam")
Drink.create!(name: "Flat White", brew_style: "Espresso with milk", description: "The beverage is prepared by pouring microfoam (steamed milk consisting of small, fine bubbles with a glossy or velvety consistency) over a shot of espresso.")
Drink.create!(name: "Americano", brew_style: "Espresso", description: "style of coffee prepared by brewing espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee.")
Drink.create!(name: "Cubano", brew_style: "Espresso", description: "An espresso shot which is sweetened with demerara sugar as it is being brewed, but the name covers other drinks that use Cuban espresso as their base.")
Drink.create!(name: "Macchiato", brew_style: "Espresso with milk", description: "Macchiato, meaning \"stained\", is an espresso with a dash of foamed milk.")
Drink.create!(name: "Cold Brew", brew_style: "Cold Brew", description: "Cold brew, or cold press, is coffee grounds steeped in water at cold or room temperature for an extended period.")
Drink.create!(name: "Cafe au lait", brew_style: "Coffee with milk", description: "Coffee with hot milk added")
Drink.create!(name: "Turkish", brew_style: "Turkish", description: "Beans for Turkish coffee are ground to a fine powder. Preparation consists of immersing the coffee grounds in water and heating until it just boils. The coffee and the desired amount of sugar are stirred until all coffee sinks and the sugar is dissolved before boiling.")
Drink.create!(name: "Zorro", brew_style: "Espresso", description: "A Cafe Zorro is a double espresso or doppio, added to hot water with a 1:1 ratio.")
Drink.create!(name: "Doppio", brew_style: "Espresso", description: "Doppio in espresso is a double shot, served in a demitasse cup.")
Drink.create!(name: "Romano", brew_style: "Espresso", description: "An espresso Romano is a shot of espresso with a slice of lemon served on the side. The lemon can be run along the rim of the cup as a way to accentuate the espresso's sweetness. Despite the name, it has no link to Italy nor Rome.")
Drink.create!(name: "Guillermo", brew_style: "Espresso", description: "Ristretto is traditionally a short shot of espresso made with the normal amount of ground coffee but extracted with about half the amount of water. Ristretto means 'limited' or 'restricted' in Italian whereas lungo means 'long'.")
Drink.create!(name: "Palazzo", brew_style: "Iced Coffee", description: "A Palazzo is an iced coffee variant, popular in Southern California. It is two shots of espresso, chilled immediately after brewing and mixed with sweetened cream.")


Location.create!(name: "Dancing Goats", address: "650 North Ave NE Atlanta, GA 30308", lat: 33.774135, lng: -84.367017)
Location.create!(name: "Working Girls' Cafe", address: "122 New Montgomery St, San Francisco, CA 94105", lat: 37.787227, lng: -122.400304)
Location.create!(name: "Catahoula Coffee Co", address: "12472 San Pablo Ave, Richmond, CA 94805", lat: 37.940320, lng: -122.301227)
Location.create!(name: "Philz Coffee", address: "399 Golden Gate Ave, San Francisco, CA 94102", lat: 37.781333, lng: -122.416505)
Location.create!(name: "Kaleidoscope Coffee", address: "09 Park Pl, Richmond, CA 94801", lat: 37.926966, lng: -122.384273)
Location.create!(name: "Bel Bacio - Italian Cafe", address: "350 W Julian St #4, San Jose, CA 95110", lat: 37.336091, lng: -121.898498)
Location.create!(name: "Subrosa Coffee", address: "419 40th St, Oakland, CA 94609", lat: 37.828317, lng: -122.260334)
Location.create!(name: "Steeltown Coffee & Tea", address: "695 Railroad Ave, Pittsburg, CA 94565", lat: 38.030672, lng: -121.883899)
Location.create!(name: "Blue Bottle Coffee", address: "1355 Market St, San Francisco, CA 94103", lat: 37.776519, lng: -122.402126)
Location.create!(name: "Caffe Trieste", address: "601 Vallejo St, San Francisco, CA 94133", lat: 37.798657, lng: -122.407113)
Location.create!(name: "Grand Coffee", address: "2663 Mission St, San Francisco, CA 94110", lat: 37.754417, lng: -122.418123)
Location.create!(name: "Ritual Coffee Roasters", address: "1026 Valencia St, San Francisco, CA 94110", lat: 37.756682, lng: -122.421363)
Location.create!(name: "Trouble Coffee Co", address: "4033 Judah St, San Francisco, CA 94122", lat: 37.758747, lng: -122.489086)
Location.create!(name: "Spike's Coffees & Tea", address: "4117 19th St, San Francisco, CA 94114", lat: 37.759283, lng: -122.435070)
Location.create!(name: "Sue's Gallery Cafe", address: "14665 Big Basin Way, Saratoga, CA 95070", lat: 37.255591, lng: -122.0398402)
Location.create!(name: "Bitter + Sweet", address: "20560 Town Center Ln, Cupertino, CA 95014", lat: 37.318163, lng: -122.031329)
Location.create!(name: "Big Mug Coffee Roaster", address: "3014 El Camino Real, Santa Clara, CA 95051", lat: 37.3514455, lng: -121.9833711)
Location.create!(name: "Bellano Coffee", address: "3985 Stevens Creek Blvd, Santa Clara, CA 95051", lat: 37.3236199, lng: -121.9747221)
Location.create!(name: "Roy’s Station Coffee & Teas", address: "197 Jackson St, San Jose, CA 95112", lat: 37.3490205, lng: -121.896909)
Location.create!(name: "Crema Coffee Roasting Co.", address: "950 The Alameda, San Jose, CA 95126", lat: 37.3313593, lng: -121.9104087)
Location.create!(name: "Alon's Bakery & Market - Dunwoody", address: "Park Place, 4505 Ashford Dunwoody Rd, Atlanta, GA 30346", lat: 33.92463, lng: -84.338229)
Location.create!(name: "Amélie's French Bakery", address: "840 Marietta St, Atlanta, GA 30318", lat: 33.7752508, lng: -84.4091302)
Location.create!(name: "Cafe Jonah and The Magical Attic", address: "3188 Paces Ferry Pl NW, Atlanta, GA 30305", lat: 33.8413533, lng: -84.38441)
Location.create!(name: "Café Intermezzo", address: "1065 Peachtree St Suite 2, Atlanta, GA 30309", lat: 33.7833271, lng: -84.3856031)
Location.create!(name: "Chattahoochee Coffee Company", address: "6640 Akers Mill Rd SE, Atlanta, GA 30339", lat: 33.8417313, lng: -84.4996503)
Location.create!(name: "Condesa Coffee", address: "480 John Wesley Dobbs Ave NE #100, Atlanta, GA 30312", lat: 33.7597694, lng: -84.3740874)
Location.create!(name: "Octane", address: "1009 Marietta St, Atlanta, GA 30318", lat: 33.7794023, lng: -84.4102626)
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
