import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import { Grid, Container } from '@material-ui/core';
import BrotherList from './components/BrotherList';
import { IBrother } from './interfaces/IBrotherInterfaces';


const App: React.FC = () => {
  const [searchQuery, setQuery] = useState('');
  const [brothers, setBrothers] = useState<IBrother[]>([]);
  useEffect(() => {
    fetch('http://localhost:5000/brothers')
      .then((resp) => resp.json())
      .then((data) => setBrothers(data));
  }, []);

  return (
    <div className="App">
      <Container>
        <Grid container spacing={0} direction='column' alignItems='center' justify='center'>
          <h1>Brother Book</h1>
          <Search searchQuery={searchQuery} setSearchQuery={setQuery} />
          <hr/>
        </Grid>
      </Container>
      <BrotherList brothers={brothers} searchQuery={searchQuery} setSearchQuery={setQuery} />
    </div>
  );
}

export default App;
