import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { View, Text } from "react-native";
import Home from "./Screens/Home";
import Splash from "./Screens/Splash";
import BookAppointment from "./Screens/BookAppointment";
import Success from "./Screens/Success";
import Completed from "./Screens/Completed";
import Ambulance from "./Screens/Ambulance";
import Pending from "./Screens/Pending";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="BookAppointment" component={BookAppointment} />
                <Stack.Screen name="Success" component={Success} />
                <Stack.Screen name="Completed" component={Completed} />
                <Stack.Screen name="Ambulance" component={Ambulance} />
                <Stack.Screen name="Pending" component={Pending} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;