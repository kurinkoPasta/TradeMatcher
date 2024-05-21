import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { data } from "../../dummydata";
import CustomText from "../components/CustomText";

const ProfileScreen = () => {
  return (
    <View>
      <CustomText style={styles.header}> {data.username} </CustomText>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    color: "#000000",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 8,
    textAlign: "center",
  },
});
