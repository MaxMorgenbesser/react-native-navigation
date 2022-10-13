// import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from './src/Navigation/Components/BottomNav';
import Home from './src/Navigation/Screens/Home';
import NotHome from './src/Navigation/Components/NotHome';
// import Navigation from './src/Navigation/Navigation';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
  <Tab.Navigator>
<Tab.Screen 
name = "Home"
component={Home}
/>
<Tab.Screen
name = "NotHome"
component={NotHome}
/>

  </Tab.Navigator>
    </NavigationContainer>
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
