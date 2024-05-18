import React, {Component, useState} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index';

export default function LoginButton({icon,name,link}) {
    return(
        <TouchableOpacity style = {[t.flex,t.flexRow, t.justifyCenter, t.itemsCenter, t.mY2, t.bgWhite,t.roundedFull,{width: wp(90), height: wp(10)}]}>
            <Image source={icon} style = {[t.absolute,t.left0,t.mX5,{ width: wp(5), height: wp(5) }]} resizeMode="cover"/>
            <Text style = {[t.fontSemibold, {fontSize: wp(4), fontWeight: 400}]}>Tiếp tục với {name}</Text>
        </TouchableOpacity>
    )
}