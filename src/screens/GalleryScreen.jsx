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
import React, { useState } from "react";
import { data } from "../../dummydata";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";

const windowHalfWidth = Dimensions.get("window").width / 2;

const GalleryScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const goToProduct = () => {
    navigation.navigate("Product");
  };
  return (
    <SafeAreaView>
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
            <TouchableOpacity>
              <View style={styles.filter}>
                <CustomText style={styles.btnText}>Type</CustomText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.filter}>
                <CustomText style={styles.btnText}>Size</CustomText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.filter}>
                <CustomText style={styles.btnText}>Price</CustomText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={goToProduct}>
              <Image source={{ uri: data.imageURL }} style={styles.img} />
              <CustomText style={styles.subheader}>
                ${data.price} {data.name}
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProduct}>
              <Image source={{ uri: data.imageURL }} style={styles.img} />
              <CustomText style={styles.subheader}>
                ${data.price} {data.name}
              </CustomText>
            </TouchableOpacity>
          </View>
          <View style={styles.imgContainer}>
            <TouchableOpacity onPress={goToProduct}>
              <Image source={{ uri: data.imageURL }} style={styles.img} />
              <CustomText style={styles.subheader}>
                ${data.price} {data.name}
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProduct}>
              <Image source={{ uri: data.imageURL }} style={styles.img} />
              <CustomText style={styles.subheader}>
                ${data.price} {data.name}
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  img: {
    width: windowHalfWidth,
    height: windowHalfWidth + 35,
    marginVertical: 20,
  },
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
  filter: {
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEEEE",
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
    marginLeft: 30,
    marginBottom: 5,
    marginTop: -10,
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
});
