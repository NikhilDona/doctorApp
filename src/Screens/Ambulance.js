import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from '../Components/Header'

const Ambulance = () => {
    return (
        <View style={{ flex: 1 }}>

            <Header
                title={"Ambulance"}
                isIcon={true}
                onPress={() => navigation.goBack()}
            />
            <TextInput
                placeholder="Enter Your Address"
                style={{ height: 60, width: "90%", alignSelf: "center", borderWidth: 1, marginTop: 30, paddingLeft: 20, fontSize: 19, borderRadius: 15 }}

            >

            </TextInput>

            <TouchableOpacity
                style={{  alignSelf: "center", alignItems: "center", justifyContent: "center"}}
            >


                <LinearGradient
                    colors={['#6782B4', '#B1BFD8']}
                    style={{ padding: 5,width:300,marginTop:30,alignItems:"center",height:40,justifyContent:"center", borderRadius: 10, marginBottom: 8 }}
                >
                    <Text style={{ color: "#ffff", fontSize: 16 }}>Call Now</Text>
                </LinearGradient>



            </TouchableOpacity>

        </View>
    )

}
export default Ambulance;