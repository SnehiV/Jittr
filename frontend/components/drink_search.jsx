import React from 'react';
import Autosuggest from 'react-autosuggest';

class DrinkSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      suggestions: [],
      value: "",
      drinks: []
    };
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const drinks = Object.keys(this.props.drinks).map(drinkId => {
      this.state.drinks.push(this.props.drinks[drinkId].name);
      return this.props.drinks[drinkId];
    });

    if (inputLength === 0) {
      return [];
    } else {
      let suggestions = [];
      let drinkResults = drinks.filter(drink =>
        drink.name.toLowerCase().slice(0, inputLength) === inputValue
      );
      return drinkResults;
    }
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion, {query}) {
    return (
      <span className='search-item'>{suggestion.name}</span>
    );
  }

  onChange(e, {newValue, method}){
    e.preventDefault();
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
    e.preventDefault();
    window.drinkInput = {drink_id: suggestion.id, drink_name: suggestion.name};
  }

  render(){
    const {value, suggestions} = this.state;

    const inputProps = {
      placeholder: 'Drink...',
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
        id='2' />
    );
  }
}

export default DrinkSearch;
