import React, { useState, useEffect } from 'react';
import './App.scss';
import Search from './components/Search';
import BrotherList from './components/BrotherList';
import { IBrother } from './interfaces/IBrotherInterfaces';

const generateLinage = (brothers: IBrother[]) => {
  return brothers.map((brother) => {
    // Assume the default level for bigs is 0
    let brotherLevel = 0;
    // Maps [distance apart][names of littles]
    let linageMap: string[][] = [];
    const descendents = brothers.filter((littleBro) => littleBro.ancestors.includes(brother._id)).map((littleBro) => littleBro._id);

    // Find all brothers where the current brother is in their ancestors
    brothers.filter((littleBro) => littleBro.ancestors.includes(brother._id)).forEach((littleBro) => {
      // If the brother has parents update the level with the correct distance apart
      if (brother.parents) {
        const findBigLevel = brother.parents.find(({parentId}) => littleBro.ancestors.includes(parentId));
        if (findBigLevel) {
          brotherLevel = findBigLevel.level;
        }
      }
      // If the little has parents add the distance and name to the map
      if (littleBro.parents) {
        // Make sure that the parent is either in the current brothers line or is the brother
        littleBro.parents.filter(({parentId}) => descendents.includes(parentId) || parentId === brother._id).forEach(({level}) => {
          const distance =  level - brotherLevel;
          if (!linageMap[distance]) {
            linageMap[distance] = [];
          }
          linageMap[distance].push(`${littleBro.firstName} ${littleBro.lastName}`);
        });
      }
    });
    // Update the line attributre with this map
    brother.line = linageMap;
    return brother;
  });
}

const App: React.FC = () => {
  const [searchQuery, setQuery] = useState('');
  const [brothers, setBrothers] = useState<IBrother[]>([]);
  useEffect(() => {
    fetch('http://localhost:5000/brothers')
      .then((resp) => resp.json())
      .then((data) => generateLinage(data))
      .then((data) => setBrothers(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Brother Book</h1>
        </div>
        <div className="row align-self-center">
          {/* <Grid container spacing={0} direction='column' alignItems='center' justify='center'> */}
            <Search searchQuery={searchQuery} setSearchQuery={setQuery} />
            <hr/>
          {/* </Grid> */}
        </div>
      </div>
      <hr/>
      <BrotherList brothers={brothers} searchQuery={searchQuery} setSearchQuery={setQuery} />
    </div>
  );
}

export default App;
