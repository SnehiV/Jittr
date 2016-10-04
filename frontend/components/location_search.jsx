import React from 'react';
import Autosuggest from 'react-autosuggest';

class LocationSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      suggestions: [],
      value: "",
      locations: []
    };
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const locations = Object.keys(this.props.locations).map(locationId => {
      this.state.locations.push(this.props.locations[locationId].name);
      return this.props.locations[locationId];
    });

    if (inputLength === 0) {
      return [];
    } else {
      let suggestions = [];
      let locationResults = locations.filter(location =>
        location.name.toLowerCase().slice(0, inputLength) === inputValue
      );
      return locationResults;
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
    window.venueInput = {location_id: suggestion.id, location_name: suggestion.name};
  }

  render(){
    const {value, suggestions} = this.state;

    const inputProps = {
      placeholder: 'Location...',
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
        id='3' />
    );
  }
}

export default LocationSearch;
