import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import { useGlobalContext } from "../utils/context";
import Gallery from "../components/Gallery";
import { auth } from "../utils/firebase";

const WishListScreen = () => {
  const { listings } = useGlobalContext();
  return (
    <SafeAreaView>
      <CustomText style={styles.header}>Wishlist</CustomText>
      <Gallery
        listings={listings.filter((listingItem) =>
          listingItem.likedBy.includes(auth.currentUser.uid)
        )}
      />
    </SafeAreaView>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  header: {
    color: "#000000",
    fontSize: 30,
    marginTop: 0,
    textAlign: "center",
    marginTop: 30,
  },
});
