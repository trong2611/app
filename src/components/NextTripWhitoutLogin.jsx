import React, {Component, useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Platform,
    TextInput,
    Animated,
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { 
    MagnifyingGlassIcon,
    MapIcon,
    SquaresPlusIcon,
}from 'react-native-heroicons/outline';
import { ProjectColor } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Option from "../components/Option";
import { optionData, placeholderData } from "../constains";
import RecentlyViewed from "../components/RecentlyViewed";
import Destination from "../components/Destinations";
import HottestExperience from "../components/HottestExperience";
import Location from "../components/Location";
import DestinationSmall from "../components/DestinationSmall";
import Poster from "../components/Poster";
import Header from "../components/Header";
import { flushSync } from "react-dom";
import ScrollActive from "../components/ScrollActive";
import { useNavigation } from "@react-navigation/native";


export default function NextTripWithoutLogin({navigation}) {

    navigation = useNavigation();

    return(
        <View style = {[t.flex,t.wFull, t.itemsCenter,t.justifyCenter]}>
            <View style = {[{height: wp(30), width: wp(50)}, t.mY3]}>
                <Image source={require('../../assets/img/looking.jpg')} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
            </View>
            <TouchableOpacity style = {[{backgroundColor: ProjectColor.color(1), borderRadius: 10}, t.pY2, t.pX5]}>
                    <Text style = {[t.fontSemibold, t.textWhite, {fontSize: wp(3.5), fontWeight: 700}]}>Đăng nhập để xem đơn hàng</Text>
            </TouchableOpacity>
        </View>
    )

}