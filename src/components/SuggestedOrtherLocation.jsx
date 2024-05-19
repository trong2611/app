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
import SuggestedLocationItem from "./SuggestedLocationItems";
import SuggestedLocationItemButton from "./SuggestedLocationItemButton";

const screenWidth = Dimensions.get('window').width;
const data = ['hà nội', 'đà nẵng','tp. hồ chí minh','hội an', 'nha trang']
export default function SuggestedOrtherLocation({navigation}) {
    navigate = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[t.flex, t.flexCol, t.justifyCenter, t.itemsCenter, {width: screenWidth}]}>
                <View style={[t.flex, t.flexRow, t.justifyBetween, t.itemsCenter, t.pX6, t.mB6, {width: screenWidth}]}>
                    <Text style = {[t.fontSemibold, {fontSize: wp(5), fontWeight: 700, color: ProjectColor.text}]}>Việt Nam</Text>
                    <Text style = {[t.underline, {fontSize: wp(3.5), fontWeight: 500}]}>Xem thêm</Text>
                </View>
                <View style={[t.flex, t.flexRow, t.justifyBetween, t.flexWrap, t.itemsCenter, t.pX6, {width: screenWidth}]}>
                    {
                        data.map((item, index) => (
                            <SuggestedLocationItemButton key={index} index = {index}/>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}