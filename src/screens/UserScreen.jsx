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

export default function UserScreen({navigation}) {
    navigate = useNavigation();
    return(
        <View style = {[t.flex,t.flex1, t.itemsCenter,t.justifyCenter]}>
            <ScrollView style = {[t.flex,t.flex1, t.flexRow]} showsVerticalScrollIndicator={false} scrollEnabled={false}>
                <View style = {[t.flex,t.justifyEnd, t.itemsCenter,{height: wp(40), width: wp(100)}]}>
                    <Image source={require('../../assets/img/pic/1971537.jpg')} style = {[t.absolute, t.wFull, t.hFull]} resizeMode="cover"/>
                    <LinearGradient
                    colors={[ProjectColor.color(0.9), ProjectColor.color(0.2)]}
                    style={[t.absolute, t.top0,{ width: wp(100), height: wp(50) }]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    />
                    <TouchableOpacity style = {[t.bgWhite,t.roundedFull,t.itemsCenter, t.justifyCenter,t.mY8,{width: wp(45), height: wp(8)}]}
                                      onPress={() => navigation.navigate('login_screen')}
                    >
                        <Text style = {[t.fontSemibold,{color: ProjectColor.color(1)}]}>Đăng nhập / Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <View style = {[t.flex,t.bgTransparent,t.wFull,t.hFull,t.overflowHidden,t.pX2,t.itemsCenter,{borderRadius: 10}]}>
                    <View style = {[t.flex,t.flexRow,t.bgWhite, t.justifyBetween,t.wFull,t.mB2,{borderRadius: 10,height: wp(15)}]}> 
                        <TouchableOpacity style = {[t.flex1, t.justifyCenter, t.itemsCenter]}>
                            <Text style = {[t.fontSemibold,{fontSize: wp(3), color: ProjectColor.text}]}>Mã ưu đãi</Text>
                            <Text style = {[{fontSize: wp(3.5),fontWeight:500, color: ProjectColor.color(1)}]}>- - -</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[t.flex1, t.justifyCenter, t.itemsCenter]}>
                            <Text style = {[t.fontSemibold,{fontSize: wp(3), color: ProjectColor.text}]}>Points</Text>
                            <Text style = {[{fontSize: wp(3.5),fontWeight:500, color: ProjectColor.color(1)}]}>- - -</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {[t.flex,t.flexCol,t.bgWhite,t.wFull,t.justifyBetween,t.p2,t.mY2,{borderRadius: 10,height: wp(35)}]}>
                        <TouchableOpacity style = {[t.flex1, t.justifyBetween, t.itemsCenter, t.flex, t.flexRow, t.mY1]}>
                            <HeartIcon size={25} strokeWidth={1} color={ProjectColor.color(1)} style = {[t.mX3]}/>
                            <Text style = {[t.fontSemibold,t.flex1,{fontSize: wp(3.5), fontWeight: 400, color: ProjectColor.color(1)}]}>Mục yêu thích</Text>
                            <ChevronRightIcon size={20} strokeWidth={1} color={ProjectColor.iconColor} style = {[t.mX3]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[t.flex1, t.justifyBetween, t.itemsCenter, t.flex, t.flexRow, t.mY1]}>
                            <GiftIcon size={25} strokeWidth={1} color={ProjectColor.color(1)} style = {[t.mX3]}/>
                            <Text style = {[t.fontSemibold,t.flex1,{fontSize: wp(3.5), fontWeight: 400, color: ProjectColor.color(1), flex:1 }]}>Đổi điểm thưởng</Text>
                            <ChevronRightIcon size={20} strokeWidth={1} color={ProjectColor.iconColor} style = {[t.mX3]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[t.flex1, t.justifyBetween, t.itemsCenter, t.flex, t.flexRow, t.mY1]}>
                            <ShoppingBagIcon size={25} strokeWidth={1} color={ProjectColor.color(1)} style = {[t.mX3]}/>
                            <Text style = {[t.fontSemibold,t.flex1,{fontSize: wp(3.5), fontWeight: 400, color: ProjectColor.color(1), flex:1 }]}>Đơn hàng</Text>
                            <ChevronRightIcon size={20} strokeWidth={1} color={ProjectColor.iconColor} style = {[t.mX3]}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {[t.flex,t.flexCol,t.bgWhite,t.wFull,t.justifyBetween,t.p2,t.mY2,{borderRadius: 10,height: wp(35)}]}>
                        <TouchableOpacity style = {[t.flex1, t.justifyBetween, t.itemsCenter, t.flex, t.flexRow, t.mY1]}>
                            <PhoneIcon size={25} strokeWidth={1} color={ProjectColor.color(1)} style = {[t.mX3]}/>
                            <Text style = {[t.fontSemibold,t.flex1,{fontSize: wp(3.5), fontWeight: 400, color: ProjectColor.color(1)}]}>Trợ giúp</Text>
                            <ChevronRightIcon size={20} strokeWidth={1} color={ProjectColor.iconColor} style = {[t.mX3]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[t.flex1, t.justifyBetween, t.itemsCenter, t.flex, t.flexRow, t.mY1]}>
                            <HandThumbUpIcon size={25} strokeWidth={1} color={ProjectColor.color(1)} style = {[t.mX3]}/>
                            <Text style = {[t.fontSemibold,t.flex1,{fontSize: wp(3.5), fontWeight: 400, color: ProjectColor.color(1), flex:1 }]}>Đánh giá</Text>
                            <ChevronRightIcon size={20} strokeWidth={1} color={ProjectColor.iconColor} style = {[t.mX3]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style = {[t.flex1, t.justifyBetween, t.itemsCenter, t.flex, t.flexRow, t.mY1]}>
                            <Cog6ToothIcon size={25} strokeWidth={1} color={ProjectColor.color(1)} style = {[t.mX3]}/>
                            <Text style = {[t.fontSemibold,t.flex1,{fontSize: wp(3.5), fontWeight: 400, color: ProjectColor.color(1), flex:1 }]}>Cài đặt</Text>
                            <ChevronRightIcon size={20} strokeWidth={1} color={ProjectColor.iconColor} style = {[t.mX3]}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}