import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./views/HomeScreen";
import DailyMotivation from "./views/DailyMotivation";
import PlayerInventory from "./views/Inventory";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyMotivation" component={DailyMotivation} />
        <Stack.Screen name="PlayerInventory" component={PlayerInventory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
