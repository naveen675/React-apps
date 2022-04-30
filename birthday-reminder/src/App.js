import logo from './logo.svg';
import './App.css';
import React from 'react';
import {data} from './data';
import List from './list';
import UseEffect from './useEffect';
import Cleanup from './cleanup';
import Github from './githubUsers';

function App() {
  return (
    <React.Fragment>
      <div>
        <Github />
      </div>
    </React.Fragment>
  );
}

export default App;
