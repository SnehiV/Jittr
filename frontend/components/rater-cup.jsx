import React, { Component, PropTypes } from 'react';

export default class Cup extends Component {
  render() {
    let nameMap = {
      isDisabled: 'is-disabled',
      isActive: 'is-active',
      willBeActive: 'will-be-active'
    };
    let className = Object.keys(nameMap)
          .filter((prop) => this.props[prop])
          .map((prop) => nameMap[prop])
          .join(' ');
    return (
        <a className={className}>★</a>
    );
  }
}

Cup.defaultProps = {
  willBeActive: false,
  isActive: false,
  isDisabled: false
};

Cup.propTypes = {
  isActive: PropTypes.bool,
  willBeActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};
