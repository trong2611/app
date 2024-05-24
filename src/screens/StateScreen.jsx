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
import StateOption from "../components/StateOption";


export default function StateScreen({navigation}) {

    navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(false);
    const [headerBackgroundColor, setHeaderBackgroundColor] = useState(false);
    const HEADER_HEIGHT = wp(22);

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

    const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

    return(
        <View style = {[t.flex,t.flex1, t.itemsCenter,t.justifyStart, t.bgWhite]}>
            <Animated.View style = {[t.wFull, t.flex, t.flexRow, t.itemsEnd, t.justifyBetween, t.pX4, {height: HEADER_HEIGHT, zIndex: 99999}, headerBackgroundColor ? t.bgWhite : t.bgTransparent]}>
                <TouchableOpacity style = {[t.bgWhite, t.h8, t.w8, t.itemsCenter, t.justifyCenter, t.flex, t.roundedFull]} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={20} strokeWidth={2} color={ProjectColor.iconColor}/>
                </TouchableOpacity>
                <AnimatedTouchableOpacity style = {[t.flexRow, t.itemsCenter, t.bgGray100, t.roundedFull, t.pX4, t.pY3, t.mX2, t.pL, {width: wp(80)}, headerBackgroundColor ? {display: "flex"} : {display : "none"}]} onPress={() => navigation.navigate('search_screen')}>
                    <MagnifyingGlassIcon size={15} strokeWidth={4} color={ProjectColor.iconColor}/>
                    <TextInput
                      placeholder='Tìm điểm đến, hoạt động vui chơi hoặc các dịch vụ hiện có'
                      placeholderTextColor={ProjectColor.iconColor}
                      style = {[ t.textBase, t.pX3, t.trackingWider, {fontSize: 15}]}
                      editable = {false}
                    />
                </AnimatedTouchableOpacity>
                <TouchableOpacity style = {[t.bgWhite, t.h8, t.w8, t.itemsCenter, t.justifyCenter, t.flex, t.roundedFull, headerBackgroundColor ? {display: "none"} : {display : "flex"}]} onPress={() => navigation.navigate('search_screen')}>
                    <MagnifyingGlassIcon size={20} strokeWidth={2} color={ProjectColor.iconColor}/>
                </TouchableOpacity>
            </Animated.View>
            <View style = {[t.flex, t.wFull, t.justifyCenter, t.itemsStart,t.flexCol, t.pX8, {zIndex: 1, marginTop: wp(12)}]}>
                <TouchableOpacity style = {[t.flex, t.flexRow, t.justifyCenter, t.itemsCenter, t.mB3]}>
                    <Text style = {[t.textWhite, t.fontSemibold, {fontSize: wp(6), fontWeight: 800}]}>Osaka</Text>
                    <ChevronDownIcon size={15} strokeWidth={5} color='white' style = {[t.mX1]}/>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.flex, t.flexRow, t.justifyCenter, t.itemsCenter, t.pX3, t.pY1, t.bgWhite, t.roundedFull]}>
                     <MapIcon size={15} strokeWidth={2} color={ProjectColor.text} style = {[t.mR2]}/>
                    <Text style = {[t.fontSemibold, {fontSize: wp(3.5), fontWeight: 400}]}>Bản đồ</Text>
                </TouchableOpacity>
            </View>
            <Animated.View style = {[t.flex, t.justifyEnd, t.itemsStart, t.overflowHidden, {height: wp(65), width: '100%'}, imageAnimation, t.absolute, t.top0]}>
                    <Image source={require('../../assets/img/img11.jpg')} style = {[t.wFull, t.hFull]} resizeMode="cover"/>
                    <LinearGradient
                    colors={[ProjectColor.imgRGBA(0.4), ProjectColor.imgRGBA(0.3)]}
                    style={[t.top0, t.absolute,{ width: '100%', height: wp(65)}]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    />
            </Animated.View>
            <Animated.ScrollView style = {[t.flex1, t.wFull, t.hFull, t.absolute, index ? {zIndex: 2} : {zIndex: 0}]} showsVerticalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }],
                    {useNativeDriver: true,
                    listener: (event) => {
                        const offsetY = event.nativeEvent.contentOffset.y;
                        if (offsetY >= 150) {
                          setHeaderBackgroundColor(true);
                        } else {
                          setHeaderBackgroundColor(false);
                        }
                        if (offsetY > 30) {
                            setIndex(true);
                          } else {
                            setIndex(false);
                          }
                      }
                    }
                )}
                scrollEventThrottle={16}
            >

                <View style = {[t.wFull, t.bgWhite, {borderRadius: 10, marginTop: wp(60)}]}>
                    <StateOption/>
                </View>
            </Animated.ScrollView>
        </View>
    )

}
