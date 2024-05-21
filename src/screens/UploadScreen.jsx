import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActionSheetIOS,
} from "react-native";
import { useState } from "react";
import CustomText from "../components/CustomText";
import Icon from "react-native-vector-icons/FontAwesome6";
import * as ImagePicker from "expo-image-picker";

const UploadScreen = () => {
  const [image, setImage] = useState(null);

  const handleAddImage = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Choose from library", "Take photo"],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          pass;
        } else if (buttonIndex === 1) {
          pickImage();
        } else if (buttonIndex === 2) {
          pass;
        }
      }
    );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View>
        <CustomText style={styles.headerTop}>New Listing</CustomText>
      </View>
      <TouchableOpacity onPress={handleAddImage} style={styles.pickImage}>
        <Icon
          name="camera"
          size={35}
          color="#ffffff"
          style={styles.imageIcon}
        />
      </TouchableOpacity>
      <View style={styles.smallSquare}>
        <CustomText style={styles.label}>Listing name</CustomText>
      </View>
      <View style={styles.bigSquare}>
        <CustomText style={styles.label}>Listing description</CustomText>
      </View>
      <View style={styles.smallSquare}>
        <CustomText style={styles.label}>$</CustomText>
      </View>
      <View style={styles.smallSquare}>
        <CustomText style={styles.label}>Clothing type</CustomText>
      </View>
      <View style={styles.smallSquare}>
        <CustomText style={styles.label}>Size</CustomText>
      </View>
      <TouchableOpacity>
        <View style={styles.btn}>
          <CustomText style={styles.label}>Add listing</CustomText>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  headerTop: {
    color: "#000000",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 8,
    textAlign: "center",
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
  label: {
    color: "#222222",
    fontSize: 16,
    marginLeft: 17,
  },
  bigSquare: {
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 70,
    marginHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEEEE",
    marginVertical: 0,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#E1CFB9",
    borderColor: "#E1CFB9",
    marginVertical: 90,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#E1CFB9",
    marginBottom: 10,
  },
  imageIcon: {
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
  },
  pickImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
});
