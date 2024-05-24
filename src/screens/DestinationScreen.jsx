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


export default function DestinationScreen({navigation}) {

    navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current;
    const [navFixed, setNavFixed] = useState(false);

    const imageAnimation = {
        transform: [
            {
                scale: scrollY.interpolate({
                    inputRange: [-900, 0],
                    outputRange:[8,1],
                    extrapolate: 'clamp'
                })
            }
        ]
    }

    return(
        <View style = {[t.flex,t.flex1, t.itemsCenter,t.justifyStart, t.bgWhite]}>
            <View style = {[t.flex, t.justifyEnd, t.itemsStart, t.overflowHidden, {height: wp(60), width: '100%'}]}>
                    <Image source={require('../../assets/img/img11.jpg')} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                    <LinearGradient
                    colors={[ProjectColor.imgRGBA(0.5), ProjectColor.imgRGBA(0.4)]}
                    style={[t.top0, t.absolute,{ width: '100%', height: wp(60)}]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    />
                    <Text style = {[t.fontSemibold, t.textWhite, t.pX6, t.pY10,{fontSize: wp(6), fontWeight: 800, bottom:wp(5)}, t.absolute]}>Khám phá thế giới</Text>
            </View>
            <View style = {[t.pX6, t.wFull, t.flexCol, t.bgTransparent, t.absolute, {top: 0, height: wp(30), paddingTop: wp(15), zIndex: 9999}, navFixed ? t.bgWhite : t.bgTransparent]}>
                <TouchableOpacity style = {[t.flexRow, t.itemsCenter, t.bgGray100, t.roundedFull, t.pX4, t.pY3]} onPress={() => navigation.navigate('search_screen')}>
                    <MagnifyingGlassIcon size={15} strokeWidth={4} color={ProjectColor.iconColor}/>
                    <TextInput
                      placeholder='Tìm điểm đến, hoạt động vui chơi hoặc các dịch vụ hiện có'
                      placeholderTextColor={ProjectColor.iconColor}
                      style = {[t.flex1, t.textBase, t.pX3, t.trackingWider, {fontSize: 15}]}
                      editable = {false}
                    />
                </TouchableOpacity>
            </View>
            <Animated.ScrollView style = {[t.flex1, t.wFull, t.hFull, t.absolute]} bounces={false} showsVerticalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }],
                    {useNativeDriver: true,
                    listener: (event) => {
                        const offsetY = event.nativeEvent.contentOffset.y;
                        if (offsetY >= 120) {
                          setNavFixed(true);
                        } else {
                          setNavFixed(false);
                        }
                      }
                    }
                )}
                scrollEventThrottle={16}
            >
                <View style = {[t.wFull,{height: wp(55)}]}>
                    
                </View>
                <View style = {[t.wFull, t.bgWhite, {borderRadius: 10}]}>
                    <ScrollActive navFixed = {navFixed}/>
                </View>
            </Animated.ScrollView>
        </View>
    )

}
