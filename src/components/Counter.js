import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayNumber from './DisplayNumber';

const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}

class Counter extends Component {
      
    addOne = () => {
        this.props.dispatch({ type: 'ADD_ONE' });
    }
      
    minusOne = () => {
        this.props.dispatch({ type: 'MINUS_ONE' });
    }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <DisplayNumber />
          <div style={containerStyle}>
            <button type="button" style={buttonStyle} onClick={this.minusOne}>-</button>
            <button type="button" style={buttonStyle} onClick={this.addOne}>+</button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(Counter);