import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      "jess",
      "haper"
    ],
    bottomText: 'Test'
  }

  changeusername = (newUserName) => {
    this.setState({
      username: [
        newUserName,
        "haper"
      ]
    })
  }

  changetest = (event) => {
    this.setState({
      bottomText: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changetest}
          bottom={this.state.bottomText} />
        <UserOutput userName={this.state.username[0]} />
        <UserOutput
          click={this.changeusername.bind(this, 'David')}
          userName="joe"
          bottom={this.state.bottomText} />
      </div>
    );
  }
}

export default App;
