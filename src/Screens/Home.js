import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, Dimensions, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Header from '../Components/Header'
import LinearGradient from 'react-native-linear-gradient';
import Button from "../Components/Button";

const Home = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <Header title={"Doctor App"} />
                <Image
                    source={require('../Assets/banner.jpg')}
                    style={style.banner}
                />
                
                <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15, marginTop: 15, color: "black" }}>
                    Select Category
                </Text>

                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <LinearGradient
                                        colors={['#6782B4', '#B1BFD8']}
                                        style={style.linearGradient}>
                                        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "400" }}>{"Category " + index + 1}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>
                <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15, marginTop: 15, color: "black" }}>
                    Top Rated Doctors
                </Text>

                <View style={{ marginTop: 20, alignItems: 'center' }}>

                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
                        numColumns={2}
                        renderItem={({ index, item }) => {
                            return (
                                <View style={{ borderWidth: 0.2, borderRadius: 10, width: 170, marginVertical: 10, marginHorizontal: 10 }}>
                                    <View style={{ paddingTop: 20 }}>
                                        <Image
                                            source={require('../Assets/nurse.png')}
                                            style={{ height: 80, width: 80, borderRadius: 40, alignSelf: "center" }}
                                        />
                                    </View>
                                    <Text
                                        style={{ alignSelf: "center", fontSize: 17, fontWeight: "600", color: "#000", marginTop: 10 }}>Doctor {index + 1}
                                    </Text>
                                    <Text
                                        style={{ alignSelf: "center", fontSize: 14, fontWeight: "600", color: "green", backgroundColor: "#D3D3D3", padding: 5, borderRadius: 10, marginTop: 5 }}>Skin Specialist
                                    </Text>
                                    <Text
                                        style={{ alignSelf: "center", fontSize: 14, fontWeight: "600", color: index / 2 != 0 ? "green" : "red", opacity: index / 2 != 0 ? 1 : 0.5, borderRadius: 10, marginTop: 5, marginBottom: 5 }}>{index / 2 !== 0 ? "Available" : "Busy"}
                                    </Text>
                                    <Button
                                        w={150}
                                        h={40}
                                        status={index / 2 == 0 ? true : false}
                                        txt={"Book Appointment"}
                                        onPress={() => {
                                            index / 2 == 0 ? navigation.navigate("BookAppointment") : null
                                        }}
                                    />
                                </View>
                            )
                        }}
                    />

                </View>
            </ScrollView>

            <View style={{height:60,width:"90%",alignItems:"center",justifyContent:"space-around",alignSelf:"center",backgroundColor:"#fff",flexDirection:"row",elevation:3,borderRadius:10,position:"absolute",bottom:10}}>
           <TouchableOpacity
           onPress={() => navigation.navigate("Completed")}
           >
            <Image 
            source={require('../Assets/task-complete.png')}
            style={{height:40,width:70,resizeMode:"contain"}}
            />
           </TouchableOpacity>
           <TouchableOpacity
            onPress={() => navigation.navigate("Pending")}
           >
            <Image 
            source={require('../Assets/file.png')}
            style={{height:40,width:70,resizeMode:"contain",tintColor:"#000"}}
            />
           </TouchableOpacity>
           <TouchableOpacity
            onPress={() => navigation.navigate("Ambulance")}
           >
            <Image 
            source={require('../Assets/emergency-ambulance.png')}
            style={{height:40,width:70,resizeMode:"contain"}}
            />
           </TouchableOpacity>
           
            </View>
        </View>
    )

}

export default Home;


const style = StyleSheet.create({
    banner: {
        height: 230,
        alignSelf: "center",
        width: "100%",
        marginTop: 10

    },
    linearGradient: {
        width: 120,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center"

    }
})