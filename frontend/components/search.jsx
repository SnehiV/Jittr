import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      suggestions: [],
      value: "",
      drinks: []
    };
    this.firstFocus = false;
  }

  componentWillMount(){
    this.props.fetchUsers();
    this.props.fetchDrinks();
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const users = Object.keys(this.props.users).map(userId => (
      this.props.users[userId]
    ));

    const drinks = Object.keys(this.props.drinks).map(drinkId => {
      this.state.drinks.push(this.props.drinks[drinkId].name);
      return this.props.drinks[drinkId];
    });

    const venues = Object.keys(this.props.venues).map(id => (
      this.props.venues[id]
    ));

    if (inputLength === 0) {
      return [];
    } else {
      let suggestions = [];
      let userResults = users.filter(user =>
        user.username.toLowerCase().slice(0, inputLength) === inputValue
      );
      let drinkResults = drinks.filter(drink =>
        drink.name.toLowerCase().slice(0, inputLength) === inputValue
      );

      let venueResults = venues.filter(venue =>
        venue.name.toLowerCase().slice(0, inputLength) === inputValue
      );

      return suggestions.concat(userResults, drinkResults, venueResults);
    }
  }

  getSuggestionType(suggestion){
    if (this.state.drinks.includes(suggestion.name)) {
      return 'drink';
    } else if (suggestion.address) {
      return 'venue';
    } else {
      return 'user';
    }
  }

  getSuggestionValue(suggestion) {
    if (this.getSuggestionType(suggestion) === 'user') {
      return suggestion.username;
    } else {
      return suggestion.name;
    }
  }

  renderSuggestion(suggestion, {query}) {
    if (this.getSuggestionType(suggestion) === 'user') {
      return (
        <span className='search-item'>{suggestion.username}</span>
      );
    } else {
      return (
        <span className='search-item'>{suggestion.name}</span>
    );
    }
  }

  onChange(e, {newValue, method}){
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({value}){
    if (typeof value === 'string'){
      this.setState({
        suggestions: this.getSuggestions(value)
      });
    }
  }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  }

  onSuggestionSelected(e, {suggestion, suggestionValue}){
    let route;
     if (this.getSuggestionType(suggestion) === 'drink'){
       route = `drinks/${suggestion.id}`;
     } else if (this.getSuggestionType(suggestion) === 'drink'){
       route = `users/${suggestion.id}`;
     } else {
       route = `locations/${suggestion.id}`;
     }

    this.setState({value: ""});
    this.props.router.push(route);
  }

  render(){
    const {value, suggestions} = this.state;
    const inputProps = {
      placeholder: '🔎  Search',
      value,
      onChange: this.onChange.bind(this),
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
        getSuggestionValue={this.getSuggestionValue.bind(this)}
        renderSuggestion={this.renderSuggestion.bind(this)}
        onSuggestionSelected={this.onSuggestionSelected.bind(this)}
        inputProps={inputProps}
        id='1' />
    );
  }
}

export default withRouter(Search);
