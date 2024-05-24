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

export default function Destination({navigation}) {

    return(
        <View style = {[t.flex, t.flexCol, t.overflowHidden]}>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.itemsCenter, t.mB5, t.pX5]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.text}]}>Bạn muốn đi chơi ở đâu?</Text>
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
                        <TouchableOpacity style = {[t.flex,t.justifyEnd,t.overflowHidden,{width: wp(40), height: wp(25), borderRadius: 15}, t.mX2]}>
                            <Image source={item.image} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                            <Text style = {[t.textWhite,t.pX3, t.pY3, t.fontSemibold,{fontSize:wp(3.5)}]}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}