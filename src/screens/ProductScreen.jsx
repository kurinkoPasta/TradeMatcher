import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import Icon from "react-native-vector-icons/FontAwesome6";

const windowWidth = Dimensions.get("window").width;

const ProductScreen = ({ route }) => {
  const { listing } = route.params;
  const handleLiked = () => {};
  return (
    <View style={styles.container}>
      <Image source={{ uri: listing.image }} style={styles.img} />
      <CustomText style={styles.header}>
        ${listing.price} {listing.name}
      </CustomText>
      <CustomText style={styles.body}>
        @{listing.userName}
        {"\n"}
        {"\n"}
      </CustomText>
      <CustomText style={styles.body}>
        {listing.description}
        {"\n"}
      </CustomText>
      <CustomText style={styles.body}>Size: {listing.size}</CustomText>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleLiked} style={styles.likeBtn}>
          <Icon
            name="heart"
            size={20}
            color="#ffffff"
            style={styles.imageIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyBtn}>
          <CustomText style={styles.btnText}>Buy • ${listing.price}</CustomText>
        </TouchableOpacity>
      </View>
      <SafeAreaView />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  buyBtn: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 8,
    backgroundColor: "#E1CFB9",
    marginLeft: 20,
  },
  likeBtn: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#E1CFB9",
  },
  btnText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
  imageIcon: {
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    marginHorizontal: 20,
  },
});
