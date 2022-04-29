import logo from './logo.svg';
import './App.css';
import React from 'react';
import {data} from './data';
import List from './list';

function App() {
  return (
    <React.Fragment>
      <div>
        <List />
      </div>
    </React.Fragment>
  );
}

export default App;
