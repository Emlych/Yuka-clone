import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Item from "../components/Item";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HistoricScreen = ({ navigation }) => {
  const HistoricStack = createNativeStackNavigator();

  return (
    // <HistoricStack.Navigator>
    //   <HistoricStack.Screen name=
    // </HistoricStack.Navigator>
    <View style={styles.item}>
      <Text>Historic Screen</Text>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
          <Item />
        </TouchableOpacity>

        <Item />
        <Item />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: { flex: 1 },
});

export default HistoricScreen;
