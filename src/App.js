import React, { Component } from 'react';
import { test } from './components/BaseView';

class App extends Component {
  componentDidMount() {
    test()
  }
  render() {
    return (
     <div id="mainCanvas" />
    );
  }
}

export default App;
