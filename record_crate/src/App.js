import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accept from './components/Accept';
import styled from "styled-components"; 

// component to act as a CSS wrapper for page segments 
// const ContainerWrapper = styled.div`
// background-color: white;
// height: 100vh;   
// `
const IndexWrapper = styled.div`
border: solid; 
border-thickness: 1px;
text-align: center; 
align: center; 
height: 100vh;
font-family: arial;

img {
  margin: 15px;
  height: 250px;  
}

h1 { 
  font-family: arial;
}  
`


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
        <Accept></Accept>
        </div>
        
      </div>
    );
  }
}

export default App;
