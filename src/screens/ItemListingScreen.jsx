import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { data } from "../../dummydata";
import CustomText from "../components/CustomText";

const windowWidth = Dimensions.get("window").width;

const ItemListingScreen = () => {
  return (
    <View>
      <Image source={{ uri: data.imageURL }} style={styles.img} />
      <CustomText style={styles.header}>
        ${data.price} {data.name}
      </CustomText>
      <CustomText style={styles.body}>
        @{data.username}
        {"\n"}
        {"\n"}
      </CustomText>
      <CustomText style={styles.body}>
        {data.description}
        {"\n"}
      </CustomText>
      <CustomText style={styles.body}>{data.size}</CustomText>
      <Pressable onPress={() => {}}>
        <View style={styles.btn}>
          <CustomText style={styles.btnText}>Buy</CustomText>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemListingScreen;

const styles = StyleSheet.create({
  img: { width: windowWidth, height: windowWidth + 35 },
  header: {
    color: "#000000",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 8,
  },
  body: {
    color: "#222222",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
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
    marginVertical: 140,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    color: "#333333",
  },
});
