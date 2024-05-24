import React, {Component, useState} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Dimensions
}from 'react-native';
import { 
    ChevronRightIcon,
    HeartIcon,
    UserIcon,
    GiftIcon,
    Cog6ToothIcon,
    PhoneIcon,
    HandThumbUpIcon,
    ShoppingBagIcon
}from 'react-native-heroicons/outline';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SuggestedLocation from "./SuggestedLocations";
import SuggestedLocationItemButton from "./SuggestedLocationItemButton";

const screenWidth = Dimensions.get('window').width;
const data = ['hà nội', 'đà nẵng','tp. hồ chí minh','hội an', 'nha trang']
export default function SuggestedLocationItem({navigation}) {
    navigate = useNavigation();
    return(
        <View style={[t.flex, t.justifyCenter, t.itemsCenter, t.wFull, t.mY3, t.bgWhite, {borderRadius: 15, borderWidth: 1.5, borderColor: ProjectColor.tymcolor(0.5)}, t.overflowHidden]}>
            <View style={[t.flex, t.justifyCenter, t.itemsStart, t.wFull, {height: wp(20)}]}>
                <Image source={require('../../assets/img/img11.jpg')} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                <LinearGradient
                    colors={[ProjectColor.imgRGBA(0.5), ProjectColor.imgRGBA(0.4)]}
                    style={[t.absolute, t.top0,{ width: wp(100), height: wp(20) }]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
                <Text style = {[t.fontSemibold, t.textWhite, t.pX5, {fontSize: wp(4), fontWeight: 700}]}>Top điểm đến săn hoa anh đào</Text>
            </View>
            <View style={[t.flex, t.flexRow, t.justifyStart, t.flexWrap, t.itemsCenter, t.wFull, t.pY2]}>
                    {
                        data.map((item, index) => (
                            <SuggestedLocationItemButton key={index} index = {index}/>
                        ))
                    }
            </View>
        </View>
    )
}