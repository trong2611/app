import React, {Component, useState} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList
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
        <View style = {[t.flex, t.flexCol, t.overflowHidden]}>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.itemsCenter, t.mB4, t.pX5]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.text}]}>Top 10 trải nghiệm hot nhất</Text>
            </View>
            <FlatList
                data={DestinationData}
                horizontal
                showsHorizontalScrollIndicator= {false}
                keyExtractor={item => item.title}
                contentContainerStyle={[t.itemsCenter, t.pX3]}
                decelerationRate={0}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style = {[t.flex,t.flexCol,{width: wp(65), borderRadius: 15}, t.mX2]}>
                            <View style = {[t.flex,t.mY2,t.overflowHidden,t.wFull,t.itemsEnd,{height: wp(35),borderRadius: 15}]}>
                                <Image source={item.image} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                                <TouchableOpacity onPress={() => checkActive(index)} style = {[t.roundedFull,t.flex, t.itemsCenter,t.m3,t.justifyCenter,{width: wp(6.5), height: wp(6.5), backgroundColor: ProjectColor.tymcolor(0.5) }]}>
                                    <HeartIcon size={22} strokeWidth={2} color='white' style = {[t.m4]}/>
                                </TouchableOpacity>
                            </View>
                            <View style = {[t.flex,t.wFull, t.flexCol,{width: '80%'}]}>
                                <View style = {[t.flex,t.justifyStart,t.itemsStart, t.flexRow]}>
                                    <BoltIcon size={15} strokeWidth={5} color={ProjectColor.color(1)} style = {[t.m2]}/>
                                    <Text numberOfLines={2} style = {[ t.fontSemibold,{color: ProjectColor.text, fontSize: wp(4),fontWeight: 400}]}>Thuộc tính number OfLines cho phép bạn chỉ định số dòng tối đa của đoạn văn bản. Bằng cách đặt numberOfLines thành 2, bạn có thể làm cho đoạn văn bản chỉ hiển thị tối đa 2 dòng</Text>
                                </View>
                                <View style = {[t.flex,t.justifyStart,t.itemsCenter, t.flexRow]}>
                                    <StarIcon size={15} strokeWidth={5} color={ProjectColor.color(1)} style = {[t.m2]}/>
                                    <Text style = {[ t.fontSemibold,{color: ProjectColor.text, fontSize: wp(3),fontWeight: 300}]}>4.7 (10004) | 100k+ đã đặt</Text>
                                </View>
                                <View style = {[t.flex,t.justifyStart,t.itemsCenter, t.flexRow]}>
                                    <Text style = {[ t.fontSemibold, t.mX2, t.mY4,{color: ProjectColor.text, fontSize: wp(4),fontWeight: 800}]}>VND 406,836</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}