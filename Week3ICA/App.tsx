import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { DetailsScreen } from "./DetailScreen";
import { ModalScreen } from "./ModalScreen";
// Import the new component
import { WhoAmI } from "./WhoAmI";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: "My Custom Title",
            headerTitleStyle: { color: "red" },
            headerStyle: { backgroundColor: "pink" },
            headerBackTitle: "Custom Back",
          }}
        />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ presentation: "modal" }}
        />
        {/* Add the WhoAmI screen */}
        <Stack.Screen name="WhoAmI" component={WhoAmI}  options={{
            headerTitle: "awesome intro",
            headerTitleStyle: { color: "blue" },
            headerStyle: { backgroundColor: "orange" },
            headerBackTitle: "Custom Back",
          }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
