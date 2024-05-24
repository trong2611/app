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
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index';
import { DestinationData } from "../constains";

export default function Poster({navigation}) {

    return(
        <View style = {[t.flex, t.flexCol, t.overflowHidden]}>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.itemsCenter, t.mB5, t.pX5]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.text}]}>Ưu đãi khủng</Text>
                <TouchableOpacity>
                    <Text style = {[t.underline, {fontSize: wp (3.5)}]}>Xem thêm</Text>
                </TouchableOpacity>
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
                        <TouchableOpacity style = {[t.flex,t.justifyEnd,t.itemsCenter,t.overflowHidden,{width: wp(40), height: wp(60), borderRadius: 15},t.mX2]}>
                            <Image source={item.image} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                            <TouchableOpacity style = {[{width: wp(25), height: wp(6), backgroundColor: ProjectColor.color(0.5)}, t.roundedFull, t.mY8, t.flex, t.itemsCenter, t.justifyCenter]}>
                                <Text style = {[t.fontBold, t.fontSemibold,t.textWhite, {fontSize: wp(3), fontWeight: 700}]}>Nhận ngay</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}