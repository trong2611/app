import React, {Component, useEffect, useState} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    SafeAreaView,
    TextInput
}from 'react-native';
import { 
    XMarkIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    MapIcon,
    BellIcon
}from 'react-native-heroicons/outline';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";
import { ProjectColor } from "../theme";
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from "@react-navigation/native";

export default function SuggestionButton({item,  navigation}) {

    navigation = useNavigation();

    return(
        <TouchableOpacity style = {[t.pX4, t.pY2, t.m1, t.roundedFull, {backgroundColor: ProjectColor.tymcolor(0.3)}]}>
            <Text>{item}</Text>
        </TouchableOpacity>
    )
}