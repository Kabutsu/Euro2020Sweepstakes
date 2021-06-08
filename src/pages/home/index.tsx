import React, { useState } from 'react';

import logo from '../../images/logo.svg';
import Button from '../../components/button';

import './home.css';

const Home = () => {
  return (
    <div className="App">
      <span className="u-text--title">Names of People Playing</span>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
      </header>
    </div>
  );
}

export default Home;
