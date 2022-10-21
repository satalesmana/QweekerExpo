import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import {
  HomeScreen, 
  SplashScreen, 
  SignupScreen, 
  VerificationScreen,
  PersonalInfoScreen,
  RegisterDoneScreen,
  SecurityScreen,
  MessagesScreen,
  SettingsScreen,
  SearchScreen
} from './Pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () =>{
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-settings' : 'ios-settings-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}


export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{headerShown: false}}/>
      <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{headerShown: false}}/>
      <Stack.Screen name="RegisterDoneScreen" component={RegisterDoneScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
