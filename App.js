import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HistoricStackScreen from "./screens/HistoricStackScreen";
import RecoScreen from "./screens/RecoScreen";
import SyntheseScreen from "./screens/SyntheseScreen";
import ScanStackScreen from "./screens/ScanStackScreen";

import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Screen name="Tab" options={{ headerShown: false }}>
        {() => (
          <Tab.Navigator screenOptions={{ screenOptions }}>
            {/* ----------------------------------------------------- */}
            {/* Historic Tab ---------------------------------------- */}
            <Tab.Screen
              name="TabHistoric"
              component={HistoricStackScreen}
              options={{
                tabBarLabel: "Historique",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5 name="carrot" size={24} color={color} />
                ),
              }}
            />

            {/* ------------------------------------------------------------ */}
            {/* Recommendations Tab ---------------------------------------- */}
            <Tab.Screen
              name="Recos"
              component={RecoScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="swap-horizontal-circle-outline"
                    size={24}
                    color={color}
                  />
                ),
              }}
            />

            {/* ------------------------------------------------- */}
            {/* Scan Tab ---------------------------------------- */}
            <Tab.Screen
              name="ScanStack"
              options={{
                tabBarLabel: "Scan",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="barcode-scan"
                    size={24}
                    color={color}
                  />
                ),
              }}
            >
              {(props) => <ScanStackScreen {...props} />}
            </Tab.Screen>

            {/* 
          {(props) => (
            <Stack.Navigator>
              <Stack.Screen name="Scan">
                {() => <ScanScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Produit">
                {() => <Produit {...props} />}
              </Stack.Screen>
            </Stack.Navigator>
          )}
        </Tab.Screen> */}

            {/* ------------------------------------------------- */}
            {/* Synthèse Tab ---------------------------------------- */}
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons
                    name="ios-pie-chart-outline"
                    size={24}
                    color={color}
                  />
                ),
              }}
              name="Synthèse"
              component={SyntheseScreen}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>{" "}
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
