import * as React from "react";
import {Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Screen1, Screen2} from "../../screens"
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Settings" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
