import React from 'react';
import { connect } from 'react-redux';

function DisplayNumber(props) {
    return (
          <h1>{props.number}</h1>
    );
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(DisplayNumber);