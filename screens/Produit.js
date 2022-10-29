import React from "react";
import { View, Text } from "react-native";

const Produit = ({ route }) => {
  console.log("route ==> ", route);
  s;
  const { product } = route.params;
  return (
    <View>
      <Text>Produit Screen</Text>
      <Text>Product: {JSON.stringify(product)}</Text>
    </View>
  );
};

export default Produit;
