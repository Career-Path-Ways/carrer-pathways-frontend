import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const HeaderLeft = () => {
  const profileImage = require("../assets/images/Ellipse.png");
  const [name, setName] = useState("");
  const [user, setUser] = useState({});

  const loadUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("firstName");
      const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
      setName(userData);
    } catch (e) {
      console.log(e);
    }
  };

  async function fetchUser() {
    const token = await AsyncStorage.getItem("userToken");
    try {
      if (!token) {
        console.log("No token found");
        return;
      }
      const response = await axios.get("http://172.20.10.13:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data, "userpage")
      setUser(response.data);
    } catch (e) {
      console.log(e.response.message);
    }
  }
  
  useEffect(() => {
    fetchUser();
    loadUserData();
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
      }}
    >
      <View
        style={{
          width: 52,
          height: 52,
          borderWidth: 2,
          borderColor: "#202871",
          marginRight: 15,
          borderRadius: 30,
        }}
      >
        <Image source={{uri: user.avatar}} style={{ width: 48, height: 48, borderRadius: 50 }} />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "PoppinsMedium",
            fontSize: 15,
            lineHeight: 21,
            color: "#798AA3",
          }}
        >
          Good Morning,
        </Text>
        <Text
          style={{
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            lineHeight: 27,
            color: "#202871",
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

export default HeaderLeft;
