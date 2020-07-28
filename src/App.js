import React from 'react';
import styles from './App.module.css';
import {Cards} from './components';
import {fetchData} from './api';

function App() {

  componentDidMount async () {
    const data = await fetchData();
  }

  return (
    <div className={styles.appContainer}>
      <h1>Public Github GIST overview</h1>
      <Cards />
    </div>
  );

}

export default App;
