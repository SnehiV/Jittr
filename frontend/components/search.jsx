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
      return suggestions.concat(userResults, drinkResults);
    }
  }

  getSuggestionType(suggestion){
    if (this.state.drinks.includes(suggestion.name)) {
      return 'drink';
    } else {
      return 'user';
    }
  }

  getSuggestionValue(suggestion) {
    return suggestion.id;
  }

  renderSuggestion(suggestion, {query}) {
    if (this.getSuggestionType(suggestion) === 'drink') {
      return (
        <span className='search-item'>{suggestion.name}</span>
      );
    } else {
      return (
        <span className='search-item'>{suggestion.username}</span>
    );
    }
  }

  onChange(e, {newValue, method}){
    if (method === 'type') {
      this.setState({
        value: newValue
      });
    } else if (method === 'down') {
      let item = document.getElementById("react-autowhatever-1--item-0");
      if (item) {item.focus();}
    }
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
       route = `drinks/${suggestionValue}`;
     } else {
       route = `users/${suggestionValue}`;
     }

    this.setState({value: ""});
    this.props.router.push(route);
  }

  render(){
    const {value, suggestions} = this.state;

    const inputProps = {
      placeholder: '🔎  Search users and coffee',
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
        inputProps={inputProps} />
    );
  }
}

export default withRouter(Search);
