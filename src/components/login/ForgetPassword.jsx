import React, {Component, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../../theme/index';
import { LinearGradient } from "expo-linear-gradient";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Animated, { BounceIn, FadeInRight, LightSpeedInLeft, LightSpeedInRight } from "react-native-reanimated";

export default function ForgetPasswordComponent({navigation}) {
    navigation = useNavigation();
    const [email, setEmail] = useState('');

    return(
        <View style = {[t.flex1]}>
            <LinearGradient
                  colors={[ProjectColor.color(1), '#66B2FF']}
                  style={[t.wFull, t.hFull, t.flex1, t.absolute]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 0.5, y: 1 }}
            />
            <SafeAreaView style = {[t.flex, t.flex1, t.overflowHidden, t.bgTransparent, t.m6]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={30} strokeWidth={1} color='white' />
                </TouchableOpacity>
                <View style = {[t.wFull, t.pY12]}>
                    <Animated.Text style = {[t.textWhite, t.fontLight, {fontSize: wp(4)}]} entering={LightSpeedInRight.duration(500)} exiting={LightSpeedInLeft.duration(500)}>Vui lòng nhập email đã dùng để đăng ký</Animated.Text>
                </View>
                <View style = {[t.wFull, t.itemsCenter, t.justifyCenter]}>
                    <View style = {[t.wFull, t.pY2, t.mY4, t.borderB, {borderBottomColor: 'white'}]}>
                        <TextInput placeholder="E-mail" placeholderTextColor='white' style = {[t.fontLight, t.textWhite, {fontSize: wp(4)}]} onChangeText={(text) => setEmail(text)} value={email}/>
                    </View>
                    <TouchableOpacity style = {[t.wFull, t.p3, t.mY10, t.roundedFull, t.itemsCenter, t.alignCenter, {backgroundColor: email ? 'white' : ProjectColor.tymcolor(0.5)}]}>
                        <Text style = {[t.textGray600, {fontSize: wp(4)}]}>Tạo lại mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}