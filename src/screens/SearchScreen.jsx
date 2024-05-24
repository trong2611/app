import React, {Component, useEffect, useState, useRef } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    SafeAreaView,
    TextInput,
    Animated,
    Dimensions
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
import Suggestion from "../components/Suggestion";

export default function SearchScreen({navigation}) {

    navigation = useNavigation();

    return(
        <SafeAreaView style = {[t.flex,t.flex1, t.itemsCenter,t.justifyStart, t.bgWhite, t.flexCol]}>
            <View style = {[t.mX2, t.flexRow, t.mB2]}>
                <TouchableOpacity style = {[t.flexRow, t.itemsCenter, t.bgGray100, t.roundedFull, t.pX4, t.pY3, t.mX2, t.pL,{flex: 3}]}>
                    <MagnifyingGlassIcon size={15} strokeWidth={4} color={ProjectColor.iconColor}/>
                    <TextInput
                      placeholder='Tìm điểm đến, hoạt động vui chơi hoặc các dịch vụ hiện có'
                      placeholderTextColor={ProjectColor.iconColor}
                      style = {[t.flex1, t.textBase, t.pX3, t.trackingWider, {fontSize: 15}]}
                    />
                </TouchableOpacity>
                <View style ={[t.flex, t.flex1, t.flexRow]}>
                    <TouchableOpacity style = {[t.bgTransparent, t.flex1, t.justifyCenter, t.itemsCenter]}>
                        <MapIcon size={23} strokeWidth={2} color={ProjectColor.iconColor}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[t.bgTransparent, t.flex1, t.justifyCenter, t.itemsCenter]} onPress={() => navigation.goBack()}>
                        <Text style = {[t.fontSemibold,{fontWeight: 500}]}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style = {[t.pX6, {paddingVertical: wp(5)}, t.wFull]}>
                <Suggestion title='Lịch sử tìm kiếm' data={['BangKok', 'Tokyo', 'đà nẵng', 'tàm kì', 'hà nội', 'vịnh hạ long', 'Thành phố hồ chí minh']}/> 
                <Suggestion title='Tìm kiếm nhiều nhất' data = {['Việt Nam', 'bà nà hill', 'ine']}/>
                <View style = {[t.wFull, t.flex, t.flexCol]}>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}