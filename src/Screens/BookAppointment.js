import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from "../Components/Button";
import Header from '../Components/Header'

const BookAppointment = ({ navigation }) => {

    let DaysList = [];
    const [selectedSlots, setSelectedSlots] = useState(-1)
    const [selectGender, setSelectGender] = useState(0)
    const [day, setDay] = useState([])
    const [selectedDate, setSelectedDate] = useState(-1)

    useEffect(() => {
        DaysList=[]

        for (var i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
            DaysList.push({ day: i, selected: false })

            setDay(DaysList)

        }
    }, [])

    const getDays = (month) => {

        let days = 0;
 
        if (month == 1) {
            days = 31;
        }
        else if (month == 2) {
            days = 28;
        }
        else if (month == 3) {
            days = 31;
        }
        else if (month == 4) {
            days = 30;
        }
        else if (month == 5) {
            days = 31;
        }
        else if (month == 6) {
            days = 30;
        }
        else if (month == 7) {
            days = 31;
        }
        else if (month == 8) {
            days = 31;
        }
        else if (month == 9) {
            days = 30;
        }
        else if (month == 10) {
            days = 31;
        }
        else if (month == 11) {
            days = 30;
        }
        else if (month == 12) {
            days = 31;
        }
        return days;
    }

    return (

        <ScrollView style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>
                <Header
                    title={"Book Appointment"}
                    isIcon={true}
                    onPress={() => navigation.goBack()}
                />

                <Image
                    source={require('../Assets/nurse.png')}
                    style={{ height: 120, width: 120, borderRadius: 60, marginTop: 30, alignSelf: "center" }}
                />
                <Text
                    style={{ alignSelf: "center", fontSize: 17, fontWeight: "600", color: "#000", marginTop: 10 }}>Doctor Jack
                </Text>
                <Text
                    style={{ alignSelf: "center", fontSize: 14, fontWeight: "600", color: "green", backgroundColor: "#D3D3D3", padding: 5, borderRadius: 10, marginTop: 5 }}>Skin Doctor
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15, marginTop: 10, marginBottom: 10, color: "black" }}>
                    Select Date
                </Text>

                <View>
                    <FlatList
                        data={day}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        if(item.day < new Date().getDate()){
                                            Alert.alert("Warning","Kindly choose a valid date")

                                        }
                                        else{
                                            setSelectedDate(index)
                                        
                                        }
                                    }
                                        
                                    }
                                    style={{ height: 50, width: 50, margin: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", backgroundColor: selectedDate == index ? "green" : "#fff", borderWidth: selectedDate == index ? null : 1 }}
                                >
                                    <Text style={{ color: selectedDate == index ? "#fff" : "#000" }}>{item.day}</Text>
                                </TouchableOpacity>
                            )
                        }}

                    />
                </View>

                <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15, marginTop: 10, marginBottom: 10, color: "black" }}>
                    Available Slots
                </Text>

                <View >
                    <FlatList
                        data={[
                            '10.00 - 12.00PM',
                            '12:00 - 02:00PM',
                            '04.00 - 06.00PM',
                            '06.00 - 08.00PM',
                            '08.00 - 10.00PM'
                        ]}
                        numColumns={2}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => setSelectedSlots(index)}
                                    style={{ height: 40, borderWidth: 1, margin: 10, backgroundColor: selectedSlots == index ? 'green' : null, height: 40, borderColor: selectedSlots == index ? 'green' : 'black', borderRadius: 10, width: "45%", justifyContent: "center", alignItems: "center" }}
                                >
                                    <Text style={{ color: selectedSlots == index ? '#fff' : null }}>{item}</Text>

                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>

                <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15, marginTop: 10, marginBottom: 10, color: "black" }}>
                    Patient Name
                </Text>

                <TextInput
                    style={{ height: 50, width: "94%", alignSelf: "center", borderWidth: 1, borderRadius: 20, paddingLeft: 20, fontSize: 18 }}
                    placeholder={"Enter here"}
                >
                </TextInput>

                <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15, marginTop: 20, marginBottom: 10, color: "black" }}>
                    Select Gender
                </Text>

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20, marginBottom: 20 }}>

                    <TouchableOpacity
                        onPress={() => setSelectGender(0)}
                        style={{ height: 100, width: 100, elevation: 5, backgroundColor: selectGender == 0 ? "green" : '#f2f2f2', justifyContent: "center", borderRadius: 10 }}
                    >
                        <Image
                            source={(require('../Assets/male-gender.png'))}
                            style={{ height: 60, width: 60, alignSelf: "center", tintColor: "grey" }}

                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelectGender(1)}
                        style={{ height: 100, width: 100, elevation: 5, backgroundColor: selectGender == 1 ? "green" : "#f2f2f2", justifyContent: "center", borderRadius: 10 }}>
                        <Image
                            source={(require('../Assets/femenine.png'))}
                            style={{ height: 70, width: 70, alignSelf: "center", tintColor: "grey" }}

                        />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Success")} style={{ alignSelf: 'center', width: "90%", marginBottom: 20 }}>

                    <LinearGradient
                        colors={['#6782B4', '#B1BFD8']}
                        style={{ padding: 5, borderRadius: 10, alignItems: "center", height: 40, justifyContent: "center" }}
                    >
                        <Text style={{ color: "#ffff", fontSize: 16 }}>Book Now</Text>
                    </LinearGradient>

                </TouchableOpacity>

            </View>

        </ScrollView>
    )

}

export default BookAppointment;