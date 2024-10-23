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
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { useGlobalContext } from "../utils/context";

const windowWidth = Dimensions.get("window").width;

const ProductScreen = ({ route }) => {
  const { listingId } = route.params;
  const { listings } = useGlobalContext();
  const listing = listings.find((listingItem) => listingItem.id === listingId);
  const isCurrUser = listing.userId === auth.currentUser.uid;

  const handleLiked = () => {
    updateDoc(doc(db, `listings/${listing.id}`), {
      likedBy: listing.likedBy.includes(auth.currentUser.uid)
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };

  const handleEdit = () => {};
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
        {isCurrUser ? (
          <TouchableOpacity onPress={handleEdit} style={styles.buyBtn}>
            <CustomText style={styles.btnText}>Edit</CustomText>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity onPress={handleLiked} style={styles.likeBtn}>
              <Icon
                name="heart"
                size={20}
                color="#222222"
                style={styles.imageIcon}
                solid={listing.likedBy.includes(auth.currentUser.uid)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyBtn}>
              <CustomText style={styles.btnText}>
                Buy • ${listing.price}
              </CustomText>
            </TouchableOpacity>
          </>
        )}
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
  },
  likeBtn: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#E1CFB9",
    marginRight: 20,
  },
  btnText: {
    fontSize: 18,
    color: "#222222",
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
