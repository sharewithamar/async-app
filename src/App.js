import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

 /*  constructor(props) {
    super(props);
    this.state = {
      age: 30 + this.props.increment
    }
  }
 */
    state = {
      age:30
    }
  handleChange = () =>
  {
     this.setState((prevState,prevProp) => {
        return {age : prevState.age + prevProp.increment}
     })
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.age}
          </p>
          <button onClick={this.handleChange}
      
          >
            Learn React
          </button>
        </header>
      </div>
    );

  }

}

export default App;
