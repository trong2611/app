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

export default function Destination({navigation}) {

    return(
        <View>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.mB4]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.color}]}>Bạn muốn đi chơi ở đâu?</Text>
                <TouchableOpacity>
                    <Text style = {[t.underline, {fontSize: wp (3.5)}]}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {[t.flex]}>
                {
                    DestinationData.map((item,index) => {
                        return(
                            <TouchableOpacity key={index.toString()} style = {[t.flex,t.justifyEnd,t.overflowHidden,{width: wp(40), height: wp(25), borderRadius: 15}, index==0 ? [t.mL0, t.mR2] : t.mX2]}>
                                <Image source={item.image} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                                <Text style = {[t.textWhite,t.pX3, t.pY3, t.fontSemibold,{fontSize:wp(4)}]}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}