import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import CustomText from "../components/CustomText";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Success signing up");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing up");
      });
  };
  return (
    <SafeAreaView>
      <CustomText style={styles.header}>Welcome!</CustomText>
      <CustomText style={styles.subheader}>Create a new account</CustomText>
      <View style={styles.smallSquare}>
        <TextInput
          style={styles.btnText}
          value={email}
          placeholder="E-mail"
          onChangeText={setEmail}
          style={styles.textInput}
        />
      </View>
      <View style={styles.smallSquare}>
        <TextInput
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          style={styles.textInput}
        />
      </View>
      <View style={styles.smallSquare}>
        <TextInput
          value={confirmPassword}
          placeholder="Confirm password"
          onChangeText={setConfirmPassword}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity onPress={handleSignUp}>
        <View style={styles.btn}>
          <CustomText style={styles.btnText}>Sign up</CustomText>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  header: {
    color: "#000000",
    fontSize: 30,
    marginTop: 150,
    textAlign: "center",
    marginVertical: 20,
  },
  textInput: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 17,
    fontFamily: "Times New Roman",
  },
  smallSquare: {
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEEEE",
    marginVertical: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 20,
    marginHorizontal: 80,
    borderWidth: 1,
    backgroundColor: "#E1CFB9",
    borderColor: "#E1CFB9",
    marginVertical: 30,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 0,
    color: "#000000",
    textAlign: "center",
  },
  subheader: {
    fontSize: 16,
    lineHeight: 0,
    color: "#000000",
    textAlign: "center",
    marginBottom: 30,
  },
});
