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
import { 
    HeartIcon
}from 'react-native-heroicons/outline';
import { 
    BoltIcon,
    StarIcon
}from 'react-native-heroicons/outline';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index';
import { DestinationData } from "../constains";

export default function HottestExperience({navigation}) {

    return(
        <View>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.mB4]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.text}]}>Các công viên chủ đề lớn nhất thế giới</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {[t.flex]}>
                {
                    DestinationData.map((item,index) => {
                        return(
                            <TouchableOpacity key={index.toString()} style = {[t.flex,t.flexCol,{width: wp(40), borderRadius: 15}, index==0 ? [t.mL0, t.mR2] : t.mX2]}>
                                <View style = {[t.flex,t.mY2,t.overflowHidden,t.wFull,t.itemsEnd,{height: wp(25),borderRadius: 15}]}>
                                    <Image source={item.image} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                                    <TouchableOpacity onPress={() => checkActive(index)} style = {[t.roundedFull,t.flex, t.itemsCenter,t.m2,t.justifyCenter,{width: wp(6), height: wp(6), backgroundColor: ProjectColor.tymcolor(0.5) }]}>
                                        <HeartIcon size={22} strokeWidth={2} color='white' style = {[t.m4]}/>
                                    </TouchableOpacity>
                                </View>
                                <View style = {[t.flex,t.wFull, t.flexCol,{width: '80%'}]}>
                                    <View style = {[t.flex,t.justifyStart,t.itemsStart, t.flexRow]}>
                                        <BoltIcon size={15} strokeWidth={5} color={ProjectColor.color(1)} style = {[t.m1]}/>
                                        <Text numberOfLines={3} style = {[ t.fontSemibold,{color: ProjectColor.text, fontSize: wp(3.5),fontWeight: 400}]}>Thuộc tính number OfLines cho phép bạn chỉ định số dòng tối đa của đoạn văn bản. Bằng cách đặt numberOfLines thành 2, bạn có thể làm cho đoạn văn bản chỉ hiển thị tối đa 2 dòng</Text>
                                    </View>
                                    <View style = {[t.flex,t.justifyStart,t.itemsCenter, t.flexRow, t.mY1]}>
                                        <StarIcon size={15} strokeWidth={5} color={ProjectColor.color(1)} style = {[t.m1]}/>
                                        <Text style = {[ t.fontSemibold,{color: ProjectColor.text, fontSize: wp(3),fontWeight: 300}]}>4.7 (10004)</Text>
                                    </View>
                                    <View style = {[t.flex,t.justifyStart,t.itemsCenter, t.flexRow]}>
                                        <Text style = {[ t.fontSemibold, t.mX1, t.mY2,{color: ProjectColor.text, fontSize: wp(3.5),fontWeight: 700}]}>VND 406,836</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}