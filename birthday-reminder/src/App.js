import logo from './logo.svg';
import './App.css';
import React from 'react';
import {data} from './data';
import List from './list';
import UseEffect from './useEffect';
import Cleanup from './cleanup';
import Github from './githubUsers';
import SingleUser from './singleUser';


function App() {
  return (
    <React.Fragment>
      <div>
        <SingleUser />
      </div>
    </React.Fragment>
  );
}

export default App;
