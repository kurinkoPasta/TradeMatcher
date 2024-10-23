import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const SettingsScreen = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <View>
      <CustomText>Settings</CustomText>
      <TouchableOpacity onPress={handleSignOut}>
        <CustomText>Sign out</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
