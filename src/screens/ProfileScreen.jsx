import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { data } from "../../dummydata";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";

const windowHalfWidth = Dimensions.get("window").width / 2;

const ProfileScreen = () => {
  const goToWishList = () => {
    navigation.navigate("Wishlist");
  };
  const navigation = useNavigation();
  const goToProduct = () => {
    navigation.navigate("Product");
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={goToWishList}>
          <View>
            <Icon
              name="heart"
              size={20}
              color="#000000"
              style={styles.imageIcon}
            />
          </View>
        </TouchableOpacity>
        <View>
          <CustomText style={styles.header}> {data.username} </CustomText>
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

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    color: "#000000",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 0,
    textAlign: "center",
  },
  img: {
    width: windowHalfWidth,
    height: windowHalfWidth + 35,
    marginVertical: 20,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 0,
    color: "#000000",
    marginLeft: 30,
  },
  imageIcon: {
    opacity: 1,
    alignItems: "right",
    justifyContent: "right",
    marginLeft: 20,
    marginTop: 20,
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
