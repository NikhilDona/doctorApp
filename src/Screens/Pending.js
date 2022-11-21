import React from "react";
import { View, Text, FlatList, SafeAreaView, Image } from "react-native";
import Header from '../Components/Header'

const Pending = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                title={"Pending Appointments"}
                isIcon={true}
                onPress={() => navigation.goBack()}
            />

            <View style={{}}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ index, item }) => {
                        return (
                            <View style={{ height: 100, width: "90%", flexDirection: "row", alignSelf: "center", alignItems: "center", borderRadius: 10, elevation: 5, margin: 10, backgroundColor: "#f2f2f2" }}>
                                <Image
                                    source={require('../Assets/nurse.png')}
                                    style={{ height: 80, width: 80, borderRadius: 40, justifyContent: "center" }}
                                />

                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: 17, fontWeight: "600", color: "#000" }}>Doctor Strange</Text>
                                    <Text style={{ fontSize: 15, fontWeight: "400", color: "#000" }}>08:10 PM</Text>
                                </View>

                                
                                    <Text style={{marginLeft:30,borderRadius:5,backgroundColor:"#f2f2f2",elevation:5,color:"maroon",padding:8}}>Pending</Text>
                              
                            </View>
                        )
                    }}
                />
            </View>

        </SafeAreaView>

    )
}
export default Pending;