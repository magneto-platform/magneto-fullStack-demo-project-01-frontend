import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/header'
import './App.css';
 
class App extends Component {
  render (){
    return (
      <div className="App">
        <Header title="Top Navigation"/>
      </div>
    );
  }

}

export default App;
