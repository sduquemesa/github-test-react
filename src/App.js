import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import {GistCard} from './components';
import {fetchData} from './api'

const results_per_page = 20;
const public_gists_url = `https://api.github.com/gists/public?per_page=${results_per_page}`

function App() {
  const [data, setData] = useState();

  // Fetch data from API on mount
  useEffect( () => {
    fetchData(setData);
  }, []);

  console.log(data);

  if (!data) {
    return (
      <div className={styles.appContainer} >
        <h1>Public Github GIST overview</h1>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className={styles.appContainer} >
      
      <h1>Public Github GIST overview</h1>

      {data.map( (gist_entry, index) => {
        return <GistCard gist_data={gist_entry}/>
      })}
      
    </div>
  )

}

export default App;
