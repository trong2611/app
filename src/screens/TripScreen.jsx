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
import NextTripWithoutLogin from "../components/NextTripWhitoutLogin";


export default function TripScreen({navigation}) {

    navigation = useNavigation();

    return(
        <View style = {[t.flex,t.flex1, t.itemsStart,t.justifyStart, t.bgWhite,t.pX6,]}>
            <Text style = {[t.fontSemibold, t.wFull, t.flex, t.justifyStart, t.pT20, t.pB6,{color: ProjectColor.text, fontWeight: 700, fontSize: wp(7.5)}]}>Chuyến đi</Text>
            <NextTripWithoutLogin/>
        </View>
    )

}