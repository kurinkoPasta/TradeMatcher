import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";

const WishListScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <CustomText style={styles.header}>Wishlist</CustomText>
      </View>
    </SafeAreaView>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  header: {
    color: "#000000",
    fontSize: 30,
    marginTop: 0,
    textAlign: "center",
    marginTop: 30,
  },
});
