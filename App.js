// import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StyleSheet, Text, View } from 'react-native';
// import Navigation from './src/Navigation';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
// import BottomNav from './src/Navigation/Components/BottomNav';
import Home from './src/Navigation/Screens/Home';
// import NotHome from './src/Navigation/Components/NotHome';
import NotHome from './src/Navigation/Screens/NotHome';
import { useState,createContext, useEffect } from 'react';
import Login from './src/Navigation/Components/Login';
// import Navigation from './src/Navigation/Navigation';

const Tab = createBottomTabNavigator()

export const data = createContext()

export default function App() {
  const [loggedin,setLoggedIn] = useState()
  useEffect(()=>{

    console.log(loggedin)
  },[setLoggedIn,loggedin])
  return (<data.Provider value={{setLoggedIn}}>
    {/* <Button title='login' onPress={()=>setLoggedIn(true)}></Button> */}
    <NavigationContainer>
  <Tab.Navigator>
{!loggedin ?
  <Tab.Screen 
name = "Login"
component={Login}
screenOptions={{ headerShown: false }}
/>
:
<>
<Tab.Screen 
name = "Home"
component={Home}
screenOptions={{ headerShown: false }}
/>
<Tab.Screen
name = "NotHome"
component={NotHome}
/>

</>
}
  </Tab.Navigator>
    </NavigationContainer>
    </data.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
