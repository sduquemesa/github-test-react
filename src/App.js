import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import {GistCard} from './components';
import {fetchData} from './api'

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function App() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const classes = useStyles();

  // Fetch data from API on mount
  useEffect( () => {
    fetchData(setData, page);
  }, [page]);

  // console.log(data);

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

      <Grid container spacing={3}>

        {data.map( (gist_entry, index) => {
          return (
            <Grid item xs>
              <GistCard gist_data={gist_entry} id={index}/>
            </Grid>
          );
        })}

      </Grid>
      
      <div className={classes.root}>
        <Pagination count={10} page={page} variant="outlined" onChange={handlePageChange}/>
      </div>
    </div>
  )

}

export default App;
