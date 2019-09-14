import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { Grid } from '@material-ui/core';


const App: React.FC = () => {
  const [searchQuery, setQuery] = useState('');

  return (
    <div className="App">
      <Grid container spacing={0} direction='column' alignItems='center' justify='center'>
        <h1>Brother Book</h1>
        <Search searchQuery={searchQuery} setSearchQuery={setQuery} />
        <hr/>
      </Grid>
    </div>
  );
}

export default App;
