import React from "react";

//Screens
import HistoricScreen from "./HistoricScreen";
import Produit from "./Produit";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HistoricStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Historique"
        component={HistoricScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Produit" component={Produit} /> */}
    </Stack.Navigator>
  );
};

export default HistoricStackScreen;
