import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { data } from "../../dummydata";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import RNPickerSelect from "react-native-picker-select";
import Gallery from "../components/Gallery";

const GalleryScreen = () => {
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
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [listings, setListings] = useState([]);
  const [clothingType, setClothingType] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    (async () => {
      setListings(
        (await getDocs(collection(db, "listings"))).docs.map((snap) => ({
          ...snap.data(),
          id: snap.id,
        }))
      );
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CustomText style={styles.header}>Discover</CustomText>
        <View>
          <View style={styles.smallSquare}>
            <TextInput
              value={search}
              placeholder="Search                                                                      "
              onChangeText={setSearch}
              style={styles.textInput}
            />
          </View>
          <View style={styles.filterContainer}>
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
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={{ label: "Type", value: "" }}
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
              placeholder={{ label: "Price", value: "" }}
              onValueChange={(value) => setPrice(value)}
              items={[
                { label: "$0 - 10", value: "$0 - 10" },
                { label: "$10 - 20", value: "$10 - 20" },
                { label: "$20 - 30", value: "$20 - 30" },
                { label: "$30 - 40", value: "$30 - 40" },
                { label: "$40 - 50", value: "$40 - 50" },
                { label: "$50 - 60", value: "$50 - 60" },
                { label: "$60 - 70", value: "$60 - 70" },
                { label: "$70 - 80", value: "$70 - 80" },
                { label: "$80 - 90", value: "$80 - 90" },
                { label: "$90 - 100", value: "$90 - 100" },
                { label: "$100+", value: "$100+" },
              ]}
            />
          </View>
          <Gallery listings={listings} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  header: {
    color: "#000000",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
  textInput: {
    fontSize: 20,
    lineHeight: 26,
    marginLeft: 17,
    fontFamily: "Times New Roman",
    color: "#000000",
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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "#EEEEEE",
    width: 100,
    fontSize: 16,
    lineHeight: 0,
    color: "#000000",
    textAlign: "center",
    fontFamily: "Times new roman",
    borderRadius: 5,
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
