import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, Dimensions, StatusBar, TouchableOpacity } from "react-native";

const Home = ({ title, isIcon, onPress }) => {

    return (
        <View style={{ height: 60, backgroundColor: "#fff", width: "100%", elevation: 5,alignItems:"center", borderBottomEndRadius: 10, borderBottomLeftRadius: 10, flexDirection: "row" }}>
            <StatusBar
                backgroundColor={"#fff"}
                barStyle={"dark-content"}
            />

            {
                isIcon ?
                    <TouchableOpacity onPress={()=> onPress()}>

                        <Image
                            source={require('../Assets/left-arrow.png')}
                            style={{ height: 30, width: 30, marginTop: 10,marginLeft:15 }}
                        />
                    </TouchableOpacity>
                    : null
            }


            <Text style={{ fontSize: 20, fontWeight: "600", color: "black", marginLeft: 20,marginTop:8 }}>{title}</Text>

        </View>
    )

}

export default Home;