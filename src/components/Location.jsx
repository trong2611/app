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
import { DestinationData } from "../constains";
import { HeartIcon } from "react-native-heroicons/outline";

export default function Location() {

    return(
        <View>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.mB4]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.text}]}>Các thành phố được yêu thích</Text>
                <TouchableOpacity>
                    <Text style = {[t.underline, {fontSize: wp (3.5)}]}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {[t.flex]}>
                {
                    DestinationData.map((item,index) => {
                        return(
                            <TouchableOpacity key={index.toString()} style = {[t.flex,t.justifyEnd,t.overflowHidden, t.rounded,{width: wp(30), height: wp(45)}, index==0 ? [t.mL0, t.mR2] : t.mX2]}>
                                <Image source={item.image} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                                <View style = {[t.flex,t.absolute,t.itemsEnd,t.wFull, t.hFull]}>
                                    <TouchableOpacity onPress={() => checkActive(index)} style = {[t.roundedFull,t.flex, t.itemsCenter,t.m2,t.justifyCenter,{width: wp(6), height: wp(6), backgroundColor: ProjectColor.tymcolor(0.5) }]}>
                                        <HeartIcon size={20} strokeWidth={2} color='white' style = {[t.m4]}/>
                                    </TouchableOpacity>
                                </View>
                                <Text style = {[t.textWhite,t.pX3, t.pY3, t.fontSemibold,{fontSize:wp(3.5)}]}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}