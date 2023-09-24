import { CssBaseline } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import useStyles from './styles';

import { Navbar, Actors, MovieInformation, Movies, Profile } from './index';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<MovieInformation />} />
          <Route path='/actors/:id' element={<Actors />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
