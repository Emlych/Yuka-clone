import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

//Access to camera scan
import { BarCodeScanner } from "expo-barcode-scanner";

//Components
import ScanItem from "../components/ScanItem";

//Dimensions
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ScanScreen = ({ navigation }) => {
  //------------------------------------------------------------------
  //-- States for permission acess to camera + code bar scanned or not
  const [hasPermission, setHasPermission] = useState(null);
  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };
  useEffect(() => {
    getPermission();
  }, []);

  //------------------------------------------------------------------
  //-- Action on bar code Scan: on scan set itemId to scanned data
  const [scanned, setScanned] = useState(false);
  const [itemId, setItemId] = useState("");
  const [product, setProduct] = useState({
    image: "",
    name: "",
    brand: "",
    score: 0,
  });
  const handleScannedCodeBar = async ({ type, data }) => {
    setScanned(true);
    setItemId(data);

    // -- Retrieve openfoodfacts data
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${data}.json`
      );
      console.log("item id ==> ", data);

      const product = response?.data?.product;
      setProduct({
        image: product.image_front_small_url ?? "No image provided",
        name: product.product_name ?? "No name provided",
        brand: product.brands ?? "No brand owner provided",
        score: product.ecoscore_score ?? "Missing eco score",
      });
      console.log("product info ==> ", product);
    } catch (error) {
      console.error(error.message);
    }
  };

  //----------------------------------------------------
  //- Display acces denial
  if (hasPermission === null)
    return (
      <SafeAreaView style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </SafeAreaView>
    );
  if (hasPermission === false)
    <SafeAreaView style={styles.container}>
      <Text>No access for camera</Text>
      <Button
        title={"Allow camera"}
        onPress={() => {
          getPermission();
        }}
      ></Button>
    </SafeAreaView>;

  //----------------------------------------------------
  //- Display BarCodeScanner and scanned object modal
  return (
    <View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScannedCodeBar}
        style={{ height: height, width: width }}
      />

      {scanned && (
        <Modal animationType="slide">
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("Produit", {
              //   itemId: itemId,
              // });
            }}
          >
            <View style={styles.modalView}>
              <ScanItem product={product} />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const calculateScore = (isOrganic) => {
  let score;
  //60% nutritrional quality
  //if additives: max 49/100

  //+10 if organic
  if (isOrganic) score += 10;

  return score;
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  modalView: {
    height: 100,
    padding: 5,
  },
});
