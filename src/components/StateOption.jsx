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
    ChevronLeftIcon,
    ChevronDownIcon,
}from 'react-native-heroicons/outline';
import { ProjectColor } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Option from "../components/Option";
import { optionData, placehaaolderData } from "../constains";
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


export default function StateOption({navigation}) {

    return(
        <View style = {[t.flex, t.flexCol, t.itemsCenter, t.justifyBetween, t.pX6, t.mY5]}>
            <View style = {[t.flex, t.wFull, t.flexRow, t.itemsCenter, t.justifyBetween]}>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
            </View>
            <View style = {[t.flex, t.wFull, t.flexRow, t.itemsCenter, t.justifyBetween]}>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(20)}]}>
                    <Image source = {optionData[1].image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                    <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(20), color: ProjectColor.text}, t.fontBold]}>{optionData[1].title}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}
