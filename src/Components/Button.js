import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Button = ({ w, h, onPress, txt, status }) => {

    return (
        <TouchableOpacity
            style={{ height: h, width: w, alignSelf: "center", alignItems: "center", justifyContent: "center" }}
            onPress={() => onPress()}
        >

            {
                status ? (
                    <LinearGradient
                        colors={['#6782B4', '#B1BFD8']}
                        style={{ padding: 5, borderRadius: 10, marginBottom: 8 }}
                    >
                        <Text style={{ color: "#ffff", fontSize: 16 }}>{txt}</Text>
                    </LinearGradient>

                ) : (
                    <LinearGradient
                        colors={['#8e8e8e','#8e8e8e']}
                        style={{ padding: 5, borderRadius: 10, marginBottom: 8 , opacity:0.5 }}
                    >
                        <Text style={{ color: "#ffff", fontSize: 16 }}>{txt}</Text>
                    </LinearGradient>
                )
            }

        </TouchableOpacity>
    )

}

export default Button;