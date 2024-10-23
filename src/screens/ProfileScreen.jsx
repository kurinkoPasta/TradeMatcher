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
import React, { useEffect, useState } from "react";
import { data } from "../../dummydata";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { auth, db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const windowHalfWidth = Dimensions.get("window").width / 2;

const ProfileScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const goToWishList = () => {
    navigation.navigate("Wishlist");
  };
  const goToProduct = () => {
    navigation.navigate("Product");
  };
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  useEffect(() => {
    (async () => {
      setListings(
        (
          await getDocs(
            query(
              collection(db, "listings"),
              where("userId", "==", auth.currentUser.uid)
            )
          )
        ).docs.map((snap) => ({
          ...snap.data(),
          id: snap.id,
        }))
      );
    })();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity onPress={goToWishList} style={styles.headerButton}>
            <Icon name="heart" solid size={20} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToSettings} style={styles.headerButton}>
            <Icon name="gear" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
        <View>
          <CustomText style={styles.header}>
            @{auth.currentUser.email.split("@")[0]}
          </CustomText>
          <View style={styles.gallery}>
            {listings.map((listing) => (
              <TouchableOpacity
                onPress={() => goToProduct(listing)}
                key={listing.id}
              >
                <Image source={{ uri: listing.image }} style={styles.img} />
                <CustomText style={styles.subheader}>
                  ${listing.price} {listing.name}
                </CustomText>
              </TouchableOpacity>
            ))}
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
    textAlign: "center",
    marginBottom: 35,
  },
  img: {
    width: windowHalfWidth,
    height: windowHalfWidth,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 0,
    color: "#000000",
    marginLeft: 30,
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerButton: {
    padding: 10,
    marginHorizontal: 10,
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
