/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screen/home/HomeScreen';
import { Provider } from 'mobx-react';
import Stores from './src/store';


const App = () => {

  return (
    <Provider {...Stores}>
      <HomeScreen />
    </Provider >
  );
};

export default App;
