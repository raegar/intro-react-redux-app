import React from 'react';
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

function Counter(props) {
      
  const addOne = () => {
      props.dispatch({ type: 'ADD_ONE' });
  }
    
  const minusOne = () => {
      props.dispatch({ type: 'MINUS_ONE' });
  }

  return (
    <div className="App" >
      <header className="App-header">
        <DisplayNumber />
        <div style={containerStyle}>
          <button type="button" style={buttonStyle} onClick={minusOne}>-</button>
          <button type="button" style={buttonStyle} onClick={addOne}>+</button>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(Counter);