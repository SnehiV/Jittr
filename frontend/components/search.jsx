import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      suggestions: [],
      value: ""
    };
  }

  componentWillMount(){
    this.props.fetchUsers();
  }

  getSuggestions(value) {

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.users.filter(user =>
      user.username.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionValue(suggestion) {
    return suggestion.id;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.username}</span>
    );
  }

  onChange(e, {newValue}){
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({value}){
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  }

  onSuggestionSelected(e, {suggestion, suggestionValue}){
    let userRoute = `users/${suggestionValue}`;
    this.setState({value: ""});
    this.props.router.push(userRoute);
  }

  render(){
    const {value, suggestions} = this.state;

    const inputProps = {
      placeholder: 'Search users',
      value,
      onChange: this.onChange.bind(this)
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
