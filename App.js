import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import HistoricScreen from "./screens/HistoricScreen";
import RecoScreen from "./screens/RecoScreen";
import ScanScreen from "./screens/ScanScreen";
import SyntheseScreen from "./screens/SyntheseScreen";
import Recherche from "./screens/Recherche";

import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ screenOptions }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="carrot" size={24} color={color} />
            ),
          }}
          name="Historique"
          component={HistoricScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="swap-horizontal-circle-outline"
                size={24}
                color={color}
              />
            ),
          }}
          name="Recos"
          component={RecoScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="barcode-scan"
                size={24}
                color={color}
              />
            ),
          }}
          name="Scan"
          component={ScanScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-pie-chart-outline" size={24} color={color} />
            ),
          }}
          name="Synthèse"
          component={SyntheseScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-search" size={24} color={color} />
            ),
          }}
          name="Recherche"
          component={Recherche}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#0000ff",
    height: 100,
  },
  tabBarItemStyle: {
    backgroundColor: "#00ff00",
    margin: 5,
    borderRadius: 10,
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
};
