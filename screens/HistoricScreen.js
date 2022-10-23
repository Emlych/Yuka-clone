import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Produit from "./Produit";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Historic({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
          <Produit />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
          <Produit />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
          <Produit />
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}

const HistoricStackScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Historique" component={Historic} />
      <Stack.Screen name="Produit" component={Produit} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  item: { flex: 1 },
});

export default HistoricStackScreen;
