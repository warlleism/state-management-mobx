/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import HomeScreen from './src/screen/home/HomeScreen';
import { Provider } from 'mobx-react';
import Stores from './src/store';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const App = () => {
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();

    setData(json.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Provider {...Stores}>
      <HomeScreen />
    </Provider >
  );
};

export default App;
