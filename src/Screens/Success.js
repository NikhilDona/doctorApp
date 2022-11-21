import React from "react";
import { View, Text, Image, TouchableOpacity, } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from '../Components/Button'

const Success = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20 }}>
            <Image
                source={(require('../Assets/checked.png'))}
                style={{ height: 100, width: 100 }}
            />
            <Text style={{ color: "#000", fontSize: 17, fontWeight: "400", marginTop: 20 }}>Your Appointment has been booked.</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{ height: 40, width: "70%", alignSelf: "center", marginTop: 20, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                <LinearGradient
                     colors={['#6782B4', '#B1BFD8']}
                    style={{ padding: 5, borderRadius: 10, marginBottom: 8, height: 40,alignItems:"center",justifyContent:"center", width: "80%" }}
                >
                    <Text style={{ color: "#ffff", fontSize: 16 }}>Go to Home</Text>
                </LinearGradient>

            </TouchableOpacity>
        </View>
    )

}
export default Success;