import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import HistoricScreen from "./screens/HistoricScreen";
import RecoScreen from "./screens/RecoScreen";
import ScanScreen from "./screens/ScanScreen";
import SyntheseScreen from "./screens/SyntheseScreen";
import Recherche from "./screens/Recherche";
//import Produit from "./screens/Produit";

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Historique" component={HistoricScreen} />
        <Tab.Screen name="Recos" component={RecoScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Synthèse" component={SyntheseScreen} />
        <Tab.Screen name="Recherche" component={Recherche} />
      </Tab.Navigator>
      {/* <Stack.Navigator initialRouteName="Historique">
        <Stack.Screen name="Produit" component={Produit} />
      </Stack.Navigator>
       */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
