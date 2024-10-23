import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActionSheetIOS,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import CustomText from "../components/CustomText";
import Icon from "react-native-vector-icons/FontAwesome6";
import * as ImagePicker from "expo-image-picker";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import RNPickerSelect from "react-native-picker-select";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const UploadScreen = ({ navigation }) => {
  const clothingTypeSize = {
    footwear: [
      { label: "24", value: "24" },
      { label: "24.5", value: "24.5" },
      { label: "25", value: "25" },
      { label: "25.5", value: "25.5" },
      { label: "26", value: "26" },
      { label: "26.5", value: "26.5" },
      { label: "27", value: "27" },
      { label: "27.5", value: "27.5" },
      { label: "28", value: "28" },
      { label: "28.5", value: "28.5" },
      { label: "29", value: "29" },
      { label: "29.5", value: "29.5" },
      { label: "30", value: "30" },
    ],
    other: [
      { label: "XS", value: "XS" },
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L" },
      { label: "XL", value: "XL" },
    ],
  };
  const [image, setImage] = useState("");
  const [listingName, setListingName] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [price, setPrice] = useState("");
  const [clothingType, setClothingType] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);

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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAddListing = async () => {
    setLoading(true);
    const listingRef = doc(collection(db, "listings"));
    const res = await fetch(image);
    const blob = await res.blob();
    const imageRef = ref(storage, `${listingRef.id}.jpg`);
    await uploadBytesResumable(imageRef, blob);
    const url = await getDownloadURL(imageRef);
    setDoc(listingRef, {
      name: listingName,
      description: listingDescription,
      price,
      clothingType,
      size,
      image: url,
      userId: auth.currentUser.uid,
      userName: auth.currentUser.email.split("@")[0],
      likedBy: [],
    });
    setLoading(false);
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={styles.scrollView}>
        <View>
          <CustomText style={styles.headerTop}>New Listing</CustomText>
        </View>
        <TextInput
          value={listingName}
          placeholder="Listing name"
          onChangeText={setListingName}
          style={styles.textInput}
        />
        <TextInput
          value={listingDescription}
          placeholder="Listing description"
          multiline
          onChangeText={setListingDescription}
          style={[styles.textInput, styles.multiLine]}
        />
        <TouchableOpacity onPress={handleAddImage} style={styles.pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Icon
              name="camera"
              size={35}
              color="#ffffff"
              style={styles.imageIcon}
            />
          )}
        </TouchableOpacity>
        <TextInput
          value={price}
          placeholder="$"
          onChangeText={setPrice}
          style={styles.textInput}
        />
        <RNPickerSelect
          style={pickerSelectStyles}
          placeholder={{ label: "Clothing type", value: "" }}
          onValueChange={(value) => setClothingType(value)}
          items={[
            { label: "Footwear", value: "footwear" },
            { label: "Shirt", value: "shirt" },
            { label: "Sweater", value: "sweater" },
            { label: "Shorts", value: "shorts" },
            { label: "Pants", value: "pants" },
            { label: "Dress", value: "dress" },
            { label: "Skirt", value: "skirt" },
            { label: "Accessories", value: "accessories" },
            { label: "Other", value: "other" },
          ]}
        />
        <RNPickerSelect
          style={pickerSelectStyles}
          placeholder={{ label: "Size", value: "" }}
          onValueChange={(value) => setSize(value)}
          items={
            clothingType in clothingTypeSize
              ? clothingTypeSize[clothingType]
              : clothingTypeSize.other
          }
        />
        <TouchableOpacity
          disabled={loading}
          style={[styles.btn, loading && styles.uploadingBtn]}
          onPress={handleAddListing}
        >
          {loading ? (
            <View style={styles.uploadingBtnTxt}>
              <ActivityIndicator style={styles.activityIndicator} />
              <CustomText style={styles.label}>Uploading</CustomText>
            </View>
          ) : (
            <CustomText style={styles.label}>Add listing</CustomText>
          )}
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
    marginTop: 8,
    textAlign: "center",
    marginVertical: 15,
  },
  label: {
    color: "#222222",
    fontSize: 18,
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
    overflow: "hidden",
  },
  image: {
    width: 130,
    height: 130,
  },
  textInput: {
    fontSize: 16,
    marginHorizontal: 17,
    fontFamily: "Times New Roman",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#EEEEEE",
    marginVertical: 15,
  },
  multiLine: {
    height: 100,
  },
  uploadingBtnTxt: {
    flexDirection: "row",
  },
  uploadingBtn: {
    backgroundColor: "#CCCCCC",
    alignItems: "center",
  },
  activityIndicator: {
    marginRight: 10,
    color: "black",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    marginHorizontal: 17,
    fontFamily: "Times New Roman",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#EEEEEE",
    marginVertical: 15,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});
