import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";

export default function ScanItem({ product }) {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Image style={styles.picture} source={{ uri: product.image }} />
        <View>
          <Text style={capitalFirstLetter(styles.name)}>{product.name}</Text>
          <Text style={capitalFirstLetter(styles.brand)}>{product.brand}</Text>
          <View style={styles.scoreContainer}>
            <Text>{product.score}/100 </Text>
            <Text>{scoreCategory(product.score)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Set bullet color and score category depending on product score
const scoreCategory = (score) => {
  let category = "",
    bulletColor = "";

  switch (score) {
    case score < 30:
      category = "Très mauvais";
      bulletColor = "red";
      break;
    case score < 40:
      category = "Mauvais";
      bulletColor = "red";
      break;
    case score < 55:
      category = "Moyen";
      bulletColor = "orange";
      break;
    case score > 56:
      category = "Bon";
      bulletColor = "green";
      break;
    case score > 80:
      category = "Très bon";
      bulletColor = "green";
      break;
    default:
      cateogry = "Score missing";
      bulletColor = "gray";
      break;
  }
};

//Capital first letter
const capitalFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: "white",
    height: 50,
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  container: {
    flexDirection: "row",
  },
  picture: {
    height: 60,
    width: 60,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  brand: {
    color: "gray",
    fontSize: 15,
  },
  scoreContainer: {
    flexDirection: "row",
  },
});
