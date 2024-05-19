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

const screenWidth = Dimensions.get('window').width;

export default function SuggestedLocation({navigation}) {
    navigate = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[t.flex, t.justifyStart, t.itemsStart, t.pX6, {width: screenWidth}]}>
                <Text style = {[t.fontSemibold, t.mB3, {fontSize: wp(5), fontWeight: 700, color: ProjectColor.text}]}>Địa điểm phổ biến</Text>
                <SuggestedLocationItem/>
                <SuggestedLocationItem/>
                <SuggestedLocationItem/>
            </View>
        </ScrollView>
    )
}