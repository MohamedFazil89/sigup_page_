import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import sigup from './sigup';
import Login from './login';
import game from './game'
import Chat from './Chat.'


const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sigup">
        <Stack.Screen name="Sigup" component={sigup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="data" component={game} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;