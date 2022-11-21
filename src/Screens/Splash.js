import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";

const Splash = () => {

    const navigation = useNavigation();

    useEffect (() => {
        
        setTimeout(() => {
            navigation.replace("Home")

        },1000)
       
    },[])

    return (
        <View style={{ flex: 1, alignItems: "center",justifyContent:"center" }}>
            <Image
            source={require('../Assets/doctor.jpg')}
            style={{height:400,width:300,borderRadius:50}}
             />
             <Text style={{fontSize:24,fontWeight:"800",color:"black",marginTop:40}}>Doctor Booking App</Text>
        </View>
    )

}

export default Splash;