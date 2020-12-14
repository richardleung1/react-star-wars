import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Axios from 'axios';

import Starships from './components/Starships';
import Starshipdetails from './components/Starshipdetails';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getStarships = async () => {
      const starshipData = await Axios.get(
        'https://swapi.dev/api/starships/'
      ).catch(() => null);

      setData(starshipData.data.results);
    };

    getStarships();
  }, []);

  const renderStarships = () => {
    if (!data) {
      return null;
    }
    return (
      <Switch>
        <Route path="/starships/:id"><Starshipdetails data={data} /></Route>
        <Route path="/"><Starships data={data} /></Route>
      </Switch>
    );
  };

  return (
    <div className="App">
      <div>Starships List</div>
      {renderStarships()}
    </div>
  );
}

export default App