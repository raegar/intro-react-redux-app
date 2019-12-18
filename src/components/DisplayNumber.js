import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayNumber extends Component {
  render() {
    return (
          <h1>{this.props.number}</h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(DisplayNumber);