import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useGlobalContext } from "../utils/context";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  const { isAuthenticated } = useGlobalContext();
  useEffect(() => {
    if (isAuthenticated === true) {
      navigation.navigate("Home");
    } else if (isAuthenticated === false) {
      navigation.navigate("SignUp");
    }
  }, [isAuthenticated]);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
