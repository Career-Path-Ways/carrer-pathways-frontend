import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import SettingHeaderLeft from "../components/SettingHeaderLeft";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import axios from "axios";
import { base_url } from "../config.mjs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const editProfile = () => {
  const profileImg = require("../assets/images/Ellipse.png");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access media library
    console.log("Go to pick image");
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log("asked permision");
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Launch image library to pick an image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri)
    }
  };

  const uploadImage = async (image) => {
    if (!image) {
      alert("Please select an image first");
      return;
    }
    
    const formData = new FormData();
    formData.append("avatar", {
      uri: image,
      name: "photo.jpg",
      type: "image/jpeg",
    });
    
    try {
      console.log("after try")
      const token = await AsyncStorage.getItem("userToken");
      console.log("done token")

      if (!token) {
        console.log("No token found");
        return;
      }
      const response = await axios.post(`${base_url}/avatar`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'multipart/form-data'
        },
      });

      const result = response.data.message;
      console.log(result); // Handle the response from your API
    } catch (error) {
      console.error("Error uploading image:", error.response.data.message);
    }
  };

  return (
    <View style={styles.editProfileContainer}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            height: 100,
          },
          headerLeft: () => <SettingHeaderLeft label="Complete Profile" />,
        }}
      />

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Image source={{ uri: image }} style={{ width: 96, height: 96 }} />
        <View
          style={{
            width: 32,
            height: 32,
            backgroundColor: "#202871",
            borderRadius: 20,
            position: "relative",
            left: -30,
            top: 70,
          }}
        >
          <TouchableOpacity
            onPress={pickImage}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="mode-edit" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.registerContentText}>Full Name</Text>
      <View style={styles.registerTextBoxContainer}>
        <TextInput
          placeholder="First Name"
          style={{
            fontFamily: "PoppinsMedium",
            fontSize: 14,
            lineHeight: 21,
            color: "#202871",
            width: "100%",
          }}
        />
      </View>

      <Text style={styles.registerContentText}>Date of Birth</Text>
      <View style={styles.registerTextBoxContainer}>
        <TextInput placeholder="DD/MM/YYYY" />
      </View>

      <Text style={styles.registerContentText}>Email</Text>
      <View style={styles.registerTextBoxContainer}>
        <TextInput
          style={{ fontSize: 16, lineHeight: 21, color: "#202871" }}
          placeholder="example@email.com"
        />
      </View>

      <Text style={styles.registerContentText}>Phone Number</Text>
      <View style={styles.registerTextBoxContainer}>
        <TextInput
          style={{ fontSize: 16, lineHeight: 21, color: "#202871" }}
          placeholder="0246579087"
        />
      </View>

      <Text style={styles.registerContentText}>Location</Text>
      <View style={styles.registerTextBoxContainer}>
        <TextInput
          style={{ fontSize: 16, lineHeight: 21, color: "#202871" }}
          placeholder="example@email.com"
        />
      </View>

      <View style={styles.signInButtonContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default editProfile;

const styles = StyleSheet.create({
  editProfileContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },

  registerContentText: {
    color: "#202871",
    fontSize: 15,
    lineHeight: 21,
    fontFamily: "PoppinsSemiBold",
    marginTop: 7,
  },

  registerTextBoxContainer: {
    marginTop: 5,
    width: 320,
    height: 48,
    borderRadius: 8,
    borderColor: "#A7ACD7",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },

  signInButtonContainer: {
    width: 328,
    height: 48,
    backgroundColor: "#202871",
    borderRadius: 8,
    marginTop: 40,
  },

  signInButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  signInButtonText: {
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
});
