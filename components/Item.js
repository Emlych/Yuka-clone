import { StyleSheet, View, Text, Image } from "react-native";

export default function Item() {
  return (
    <View style={styles.item}>
      <Image source={require("../assets/splash.png")} style={styles.picture} />
      <View>
        <Text>Nom du produit</Text>
        <Text>Marque</Text>
        <Text>Note du produit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flex: 1 },
  picture: {
    height: 80,
    width: 80,
  },
});
