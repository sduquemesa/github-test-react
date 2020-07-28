import React from 'react';
import styles from './App.module.css';
import {Cards} from './components';

function App() {

  return (
    <div className={styles.appContainer}>
      <h1>Public Github GIST overview</h1>
      <Cards />
    </div>
  );

}

export default App;
