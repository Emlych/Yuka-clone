import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const HistoricScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <Text>Blablab</Text>
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
};

const styles = StyleSheet.create({
  item: { flex: 1 },
});

export default HistoricScreen;
