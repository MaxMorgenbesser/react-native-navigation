import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from 
// import {Stack} from '../'
import Home from "./Screens/Home"
export const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

// export default function pageNav (){
// return(
  
// <Tab.Navigator
// screenOptions={({ route }) => ({
//   headerShown: false,
//   tabBarStyle: {
//     height: 90,
//     paddingHorizontal: 5,
//     paddingTop: 0,
//     backgroundColor: "#020202",
//     position: "absolute",
//     borderTopWidth: 0,
//   },
// })}
// >
// <Tab.Screen
//         name="home"
//         component={Home}
//         options={{
//           tabBarLabel: ({ focused, color, size }) => (
//             <Text style={{ fontSize: 10, color: focused ? "#4CC0AD" : "#fff" }}>Dashboard</Text>
//           ),
//           tabBarIcon: ({ color, focused }) => <Icon name="dashboard" size={20} color={focused ? "#4CC0AD" : "#fff"} />,
//         }}
//       />

// </Tab.Navigator>
// )
//       }
      