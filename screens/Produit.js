import React from "react";
import { View, Text } from "react-native";

const Produit = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View>
      <Text>Produit Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
    </View>
  );
};

export default Produit;
