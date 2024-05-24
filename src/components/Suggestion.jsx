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
import SuggestionButton from "./SuggestionButton";

export default function Suggestion({title, data, navigation}) {

    navigation = useNavigation();

    return(
        <View style = {[t.wFull, t.justifyStart, t.itemsStart, t.hAuto, t.mY3]}>
            <Text style = {[t.fontSemibold, t.mB3, {color: ProjectColor.text, fontSize: wp(3.5), fontWeight: 800}]}>{title}</Text>
                <View style = {[t.wFull, t.justifyStart, t.itemsCenter, t.hAuto, t.flexRow, t.flexWrap]}>
                    {
                        data && data.map((item,index) => {
                            return (
                                <SuggestionButton key = {index.toString()}  item = {item} />
                            )
                        })
                    }
                </View>
        </View>
    )
}