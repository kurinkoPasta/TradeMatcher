import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "./CustomText";

const windowHalfWidth = Dimensions.get("window").width / 2;

const Gallery = ({ listings }) => {
  const navigation = useNavigation();

  const goToProduct = (listingId) => {
    navigation.navigate("Product", { listingId });
  };
  return (
    <View style={styles.gallery}>
      {listings.map((listing) => (
        <TouchableOpacity
          onPress={() => goToProduct(listing.id)}
          key={listing.id}
        >
          <Image source={{ uri: listing.image }} style={styles.img} />
          <CustomText style={styles.subheader}>
            ${listing.price} {listing.name}
          </CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  img: {
    width: windowHalfWidth,
    height: windowHalfWidth,
  },
  subheader: {
    fontSize: 16,
    color: "#000000",
    marginLeft: 10,
    marginBottom: 5,
  },
});
