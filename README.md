# Jittr

[Jittr live][heroku]
[heroku]: http://www.jittr.us

Jittr is a full stack web application inspired by Jittr. It utilizes Ruby
on Rails on the backend, a PostgreSQL database, and React.js with a Redux
architectural framework on the frontend.

## Features & Implementation

### Single-Page App

Jittr is a single app in that all content is delivered on one static page.
Sensitive information is kept on the backend by making an API call to the
Application Controller that renders only the user's username and id through
JBuilder.

```ruby
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

end
```

### Checking In

Check-ins are stored on the database with information on the coffee drink, location,
review, and rating. A check-in also has foreign keys ```ruby drink_id ``` and (user_id) for the
drink and user in order to filter check-ins that are returned to the front end based on whether
the user is on the home page, a user profile page, or a drink profile page. Each
check-in is rendered as an individual CheckInItem subcomponent of the CheckInFeed.

### Check-In Feed

Through utilizing the foreign keys stored in the check-in data entries, check-in feeds
are rendered based on what part of the app the current user is viewing. Feeds are constructed
using Rails ActiveRecord queries on the backend. Each CheckInFeed is rendered as a list
of individual CheckInFeed subcomponent.

```javascript
class CheckInFeed extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    let checkInItems = Object.keys(this.props.checkIns).reverse().map(checkInId => {
      return (
        <li key={checkInId}><CheckInItem checkIn={this.props.checkIns[checkInId]} /></li>
      );
      }
    );

    return(
      <div className="checkIn-feed-container">
        <h3>Recent Activity</h3>
        <ul className="checkIn-feed">
          {checkInItems}
        </ul>
      </div>
    );
  }
}
```

### Friendships

Friendships are created using using join table that is constructed using the 'has_friendship' gem.
The gem creates a join table that includes a (user_id) and (friend_id) and creates two entries, one
for each user involved in the friendship request. The friendship table has a column for friendship
(status) that indicated whether a friendship has been requested, is pending, or if the users are friends.
The app utilizes a friendship controller on the backend that allows for the front end to make API calls
for requesting, accepting, and declining requests and also removing friends. The API also returns data
about the current user friendships to the front end in so the friendship components can respond accordingly.
The home page returns a feed that comprises of the check-ins created by the current user and friends of
the current user.

[image of friends page](docs/Friends-page.png)

### Profiles

Drinks and Users have profile pages that each render a CheckInFeed component
that comprises of CheckInItems relating to the current profile.


## Future Direction for the Project

There is plenty of room for more features on this project that I plan on implementing.

### Locations:

A feature that would had a huge amount of functionality to the app is for Check-Ins to
include location data. Using a Google Maps API and Geocoding  the user could find the current
name and location of where they are checking in from. With this data the CheckInFeeds
could be filtered based on location and the user could find nearby locations and view the feeds,
for that location.

### Top Rated:

Another component that would render the highest rated check-ins based on
drinks or locations.
