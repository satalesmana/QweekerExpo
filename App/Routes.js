import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen, SignupScreen} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SignupScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen 
      name="SignupScreen" 
      component={SignupScreen} 
      options={{headerShown: false}}/>
      
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
