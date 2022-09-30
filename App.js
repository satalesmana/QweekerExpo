import React from 'react';
import Router from './App/Routes';
import {NavigationContainer} from '@react-navigation/native';
import { onLoadFont  } from './App/assets/font'

export default App = () => {
  const isLoad = onLoadFont();
  if(!isLoad){
    return null
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
