
import './App.css';
import React, {Component} from 'react';
import ParentComponent from './components/parent.component';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ParentComponent/>
      </div>
    );
  }
}

export default App;
