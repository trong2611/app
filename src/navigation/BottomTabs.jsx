import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
}from 'react-native';
import { 
    BriefcaseIcon,
    HomeIcon,
    MapPinIcon,
    PlayPauseIcon,
    TicketIcon,
    UserIcon,
}from 'react-native-heroicons/outline';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import { ProjectColor } from "../theme";
import UserScreen from "../screens/UserScreen";
import DestinationScreen from "../screens/DestinationScreen";
import TripScreen from "../screens/TripScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs({navigation}) {

    return(
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: t.bgWhite, tabBarActiveTintColor: ProjectColor.color(1), tabBarInactiveTintColor: 'gray' ,tabBarLabelStyle: {fontSize:wp(2.5), fontWeight: 600},}}>
            <Tab.Screen name="Trang chủ" component={HomeScreen} options={{ tabBarIcon: ({color}) => {return <HomeIcon size={wp(6)} strokeWidth={2} color={color}/> }}}/>
            <Tab.Screen name="Điểm đến" component={DestinationScreen} options={{ tabBarIcon: ({color}) => {return <MapPinIcon size={wp(6)} strokeWidth={2} color={color}/> }}}/>
            <Tab.Screen name="Ưu đãi" component={UserScreen} options={{ tabBarIcon: ({color}) => {return <TicketIcon size={wp(6)} strokeWidth={2} color={color}/> }}}/>
            <Tab.Screen name="Chuyến đi" component={TripScreen} options={{ tabBarIcon: ({color}) => {return <BriefcaseIcon size={wp(6)} strokeWidth={2} color={color}/> }}}/>
            <Tab.Screen name="Tài khoản" component={UserScreen} options={{ tabBarIcon: ({color}) => {return <UserIcon size={wp(6)} strokeWidth={2} color={color}/> }}}/>
        </Tab.Navigator> 
    )
}