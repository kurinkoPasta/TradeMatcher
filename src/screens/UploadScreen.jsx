import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActionSheetIOS,
  TextInput,
  ScrollView,
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
        if (buttonIndex === 1) {
          pickImage();
        }
        // else if (buttonIndex === 2) {
        //   pass;
        // }
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

  const [listingName, setListingName] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [price, setPrice] = useState("");
  const [clothingType, setClothingType] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={styles.scrollView}>
        <View>
          <CustomText style={styles.headerTop}>New Listing</CustomText>
        </View>
        <View style={styles.smallSquare}>
          <TextInput
            value={listingName}
            placeholder="Listing name                                                       "
            onChangeText={setListingName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.bigSquare}>
          <TextInput
            value={listingDescription}
            placeholder="Listing description                                                       "
            onChangeText={setListingDescription}
            style={styles.textInput}
          />
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
          <TextInput
            value={price}
            placeholder="$                                                                            "
            onChangeText={setPrice}
            style={styles.textInput}
          />
        </View>
        <View style={styles.smallSquare}>
          <TextInput
            value={clothingType}
            placeholder="Clothing type                                                       "
            onChangeText={setClothingType}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.smallSquare}>
            <CustomText style={styles.label}>Size</CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
            <CustomText style={styles.label}>Add listing</CustomText>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    marginVertical: 15,
  },
  smallSquare: {
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEEEE",
    marginVertical: 15,
  },
  label: {
    color: "#222222",
    fontSize: 16,
    marginLeft: 17,
  },
  bigSquare: {
    justifyContent: "left",
    flexDirection: "row",
    borderRadius: 5,
    height: 100,
    paddingTop: 10,
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
    marginVertical: 30,
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
  },
  pickImage: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 17,
    fontFamily: "Times New Roman",
  },
});
