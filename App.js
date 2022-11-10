import React from 'react';
import Router from './App/Routes';
import {NavigationContainer} from '@react-navigation/native';
import { onLoadFont  } from './App/assets/font'
import store from './App/Store'
import { Provider } from 'react-redux'

export default App = () => {
  const isLoad = onLoadFont();
  if(!isLoad){
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};
