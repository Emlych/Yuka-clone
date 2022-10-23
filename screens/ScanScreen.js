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

//Access to camera scan
import { BarCodeScanner } from "expo-barcode-scanner";

//Components
import ScanItem from "../components/ScanItem";

//Dimensions
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ScanScreen = ({ navigation }) => {
  //-- States for permission acess to camera + code bar scanned or not
  const [hasPermission, setHasPermission] = useState(null);
  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };
  useEffect(() => {
    getPermission();
  }, []);

  //-- Action on bar code Scan: on scan set itemId to scanned data
  const [scanned, setScanned] = useState(false);
  const [itemId, setItemId] = useState("");
  const handleScannedCodeBar = async ({ type, data }) => {
    setScanned(true);
    setItemId(data);

    // -- Retrieve openfoodfacts data
    // try {
    //   const response = await axios
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

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
        title={"allow camera"}
        onPress={() => {
          getPermission();
        }}
      ></Button>
    </SafeAreaView>;

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
              <ScanItem id={itemId} />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
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
