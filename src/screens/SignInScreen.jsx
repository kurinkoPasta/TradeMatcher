import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useState } from "react";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../utils/context";

const SignInScreen = () => {
  const { user } = useGlobalContext();
  console.log(user);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
        console.log("Success signing in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing in");
      });
  };

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView>
      <CustomText style={styles.header}>Welcome back!</CustomText>
      <CustomText style={styles.btnText}>Sign into your account</CustomText>
      <View style={styles.smallSquare}>
        <TextInput
          value={email}
          placeholder="E-mail                                                                                  "
          onChangeText={setEmail}
          style={styles.textInput}
        />
      </View>
      <View style={styles.smallSquare}>
        <TextInput
          value={password}
          placeholder="Password                                                                                  "
          onChangeText={setPassword}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity onPress={handleSignIn}>
        <View style={styles.btn}>
          <CustomText style={styles.btnText}>Sign in</CustomText>
        </View>
      </TouchableOpacity>
      <CustomText style={styles.btnText}>
        Don't have an account?
        <TouchableOpacity onPress={goToSignUp}>
          <CustomText style={styles.textUnderline}> Sign up</CustomText>
        </TouchableOpacity>
      </CustomText>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
    marginVertical: 30,
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
  textUnderline: {
    fontSize: 16,
    lineHeight: 0,
    color: "#000000",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
