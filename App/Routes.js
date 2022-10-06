import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen, 
  SplashScreen, 
  SignupScreen, 
  VerificationScreen,
  PersonalInfoScreen,
  RegisterDoneScreen,
  SecurityScreen
} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="RegisterDoneScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{headerShown: false}}/>
      <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{headerShown: false}}/>
      <Stack.Screen name="RegisterDoneScreen" component={RegisterDoneScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
