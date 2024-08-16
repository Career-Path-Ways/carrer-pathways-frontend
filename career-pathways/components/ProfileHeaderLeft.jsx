import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ProfileHeaderLeft = () => {
  const profileImage = require("../assets/images/Ellipse.png");
  const [name, setName] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
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
        console.log(response.data)
        setUser(response.data);
      } catch (e) {
        console.log(e.response.message);
      }
    }
    fetchUser();
  }, []);

  const loadUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("firstName");
      const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
      setName(userData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <View
      style={{ justifyContent: "space-between", height: 105, marginLeft: 15 }}
    >
      <Text
        style={{ fontFamily: "PoppinsMedium", fontSize: 20, color: "#202871" }}
      >
        Profile
      </Text>

      <View style={{ flexDirection: "row", width: 235, height: 52 }}>
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
          <Image source={{uri: user.avatar}} style={{ width: 48, height: 48, borderRadius: 50}} />
        </View>

        <View>
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
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 12,
              lineHeight: 18,
              color: "#798AA3",
            }}
          >
            Loan Officer | GTBank Ghana
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeaderLeft;
