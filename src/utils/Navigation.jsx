import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UploadScreen from "../screens/UploadScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GalleryScreen from "../screens/GalleryScreen";
import Icon from "react-native-vector-icons/FontAwesome6";
import ProductScreen from "../screens/ProductScreen";
import WishListScreen from "../screens/WishListScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarLabel: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <Icon name="house" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarLabel: "Upload",
          tabBarIcon: ({ color, size }) => (
            <Icon name="arrow-up" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Wishlist" component={WishListScreen} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
