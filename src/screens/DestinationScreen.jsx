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


export default function DestinationScreen({navigation}) {

    navigation = useNavigation();

    return(
        <View style = {[t.flex,t.flex1, t.itemsCenter,t.justifyStart]}>
            <View style = {[t.mX4, t.flexRow, t.mB2, t.bgTransparent, t.absolute, {top: wp(15), zIndex: 9999}]}>
                <TouchableOpacity style = {[t.flexRow, t.itemsCenter, t.bgGray100, t.roundedFull, t.pX4, t.pY3, t.mX2, t.pL,{flex: 3}]} onPress={() => navigation.navigate('search_screen')}>
                    <MagnifyingGlassIcon size={15} strokeWidth={4} color={ProjectColor.iconColor}/>
                    <TextInput
                      placeholder='Tìm điểm đến, hoạt động vui chơi hoặc các dịch vụ hiện có'
                      placeholderTextColor={ProjectColor.iconColor}
                      style = {[t.flex1, t.textBase, t.pX3, t.trackingWider, {fontSize: 15}]}
                      editable = {false}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style = {[t.flex, t.flex1, t.wFull, t.hFull, t.bgWhite, t.flexCol]} showsVerticalScrollIndicator={false}>
                <View style = {[t.flex, t.wFull, t.justifyEnd, t.itemsStart,{height: wp(60)}]}>
                    <Image source={require('../../assets/img/img11.jpg')} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                    <LinearGradient
                    colors={[ProjectColor.imgRGBA(0.5), ProjectColor.imgRGBA(0.4)]}
                    style={[t.absolute, t.top0,{ width: wp(100), height: wp(60) }]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    />
                    <Text style = {[t.fontSemibold, t.textWhite, t.pX6, t.pY10,{fontSize: wp(6), fontWeight: 800}]}>Khám phá thế giới</Text>
                </View>
                <View style = {[t.flex, t.flex1, t.wFull, t.flexCol, t.absolute, t.bgWhite,{top: wp(55), borderRadius: 10}]}>
                    <ScrollActive/>
                </View>
            </ScrollView>
        </View>
    )

}