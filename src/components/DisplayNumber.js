import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
      number: state.number
    };
  }

class DisplayNumber extends Component {
  render() {
    return (
          <h1>{this.props.number}</h1>
    );
  }
}
export default connect(mapStateToProps)(DisplayNumber);