import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Mario', age: 32, belt: 'Red', id: 2 },
      { name: 'Piter', age: 25, belt: 'green', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
