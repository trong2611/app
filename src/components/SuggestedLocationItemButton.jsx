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

const screenWidth = Dimensions.get('window').width;

export default function SuggestedLocationItemButton({index,navigation}) {
    navigation = useNavigation();
    return(
        <TouchableOpacity style = {[t.pX4, t.pY2, t.mX2, t.mY1, {borderWidth: 1, borderColor: ProjectColor.tymcolor(0.5), borderRadius: 10}]}  onPress={() => navigation.navigate('state_screen')}>
            <Text style = {{ color: ProjectColor.text }}>Osaka</Text>
        </TouchableOpacity>
    )
}