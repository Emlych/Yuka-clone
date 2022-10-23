import React, { useState, useEffect } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";

//Access to camera scan
import { BarCodeScanner } from "expo-barcode-scanner";

const ScanScreen = () => {
  //-- States for permission acess to camera + code bar scanned or not
  const [hasPermission, setHasPermission] = useState(null);

  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };
  useEffect(() => {
    getPermission();
  }, []);

  //-- Action on bar code Scan
  const [scanned, setScanned] = useState(false);

  const handleScannedCodeBar = ({ type, data }) => {
    setScanned(true);
    console.log(`Code bar of type ${type} and data ${data} has been scanned`);
    alert(`Code bar of type ${type} and data ${data} has been scanned`);
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

  console.log("scanned ? ", scanned);

  return (
    <View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScannedCodeBar}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
