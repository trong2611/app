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
import { optionData } from "../constains";

export default function Option({navigation}) {
    return(
        <View style = {[t.flexRow, t.justifyBetween, t.itemsCenter, t.mX2, t.mT4]}>
            {
                optionData.map((sort,index)=>{
                    return (
                        <TouchableOpacity key = {index} style = {[t.flex, t.flexCol,t.itemsCenter,{width:wp(18), height: wp(24)}]}>
                            <Image source = {sort.image} style = {[t.m2,{width: wp(10), height: wp(10)}]}  resizeMode="stretch"/>
                            <Text style = {[t.fontSemibold, t.textCenter,{fontSize: wp(2.5), width: wp(15), color: ProjectColor.text}, t.fontBold]}>{sort.title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}