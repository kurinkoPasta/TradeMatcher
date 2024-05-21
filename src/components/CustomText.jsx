import { StyleSheet, Text, SafeAreaView } from "react-native";

const CustomText = (props) => {
  return (
    <SafeAreaView>
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </SafeAreaView>
  );
};

export default CustomText;

const styles = StyleSheet.create({ text: { fontFamily: "Times New Roman" } });
