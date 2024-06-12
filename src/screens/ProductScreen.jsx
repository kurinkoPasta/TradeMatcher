import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { data } from "../../dummydata";
import CustomText from "../components/CustomText";
import Icon from "react-native-vector-icons/FontAwesome6";

const windowWidth = Dimensions.get("window").width;

const ProductScreen = () => {
  const handleLiked = () => {};
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
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleLiked}>
          <View style={styles.likeBtn}>
            <Icon
              name="heart"
              size={20}
              color="#ffffff"
              style={styles.imageIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
            <CustomText style={styles.btnText}>Buy</CustomText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;

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
    paddingVertical: 8,
    paddingHorizontal: 130,
    borderWidth: 1,
    backgroundColor: "#E1CFB9",
    borderColor: "#E1CFB9",
    marginHorizontal: 50,
    marginVertical: 140,
    marginLeft: 20,
  },
  likeBtn: {
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: "#E1CFB9",
    borderColor: "#E1CFB9",
    marginLeft: 20,
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 140,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    color: "#333333",
  },
  imageIcon: {
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
