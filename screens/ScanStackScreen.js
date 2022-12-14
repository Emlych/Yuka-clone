import React from "react";

//Screens
import ScanScreen from "./ScanScreen";
import Produit from "./Produit";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ScanStackScreen = ({ props }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scan"
        component={ScanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Produit">{() => <Produit {...props} />}</Stack.Screen>
    </Stack.Navigator>
  );
};

export default ScanStackScreen;
