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
import { ChevronRightIcon, EyeIcon, EyeSlashIcon, XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Animated, { BounceIn, FadeInRight, LightSpeedInLeft, LightSpeedInRight } from "react-native-reanimated";

export default function LoginComponent({navigation}) {
    navigation = useNavigation();
    const [isPassword, setIsPassword] = useState(false);
    const [password, setPassword] = useState('');
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
                <TouchableOpacity onPress={() => navigation.navigate('login_screen')}>
                    <XMarkIcon size={30} strokeWidth={1} color='white' />
                </TouchableOpacity>
                <View style = {[t.wFull, t.pY12]}>
                    <Animated.Text style = {[t.textWhite, t.text3xl, t.fontLight]} entering={LightSpeedInRight.duration(500)} exiting={LightSpeedInLeft.duration(500)}>Đăng nhập</Animated.Text>
                </View>
                <View style = {[t.wFull, t.itemsCenter, t.justifyCenter]}>
                    <View style = {[t.wFull, t.pY2, t.mY4, t.borderB, {borderBottomColor: 'white'}]}>
                        <TextInput placeholder="E-mail" placeholderTextColor='white' style = {[t.fontLight, t.textWhite, {fontSize: wp(4)}]} value={email} onChangeText={(text) => setEmail(text)}/>
                    </View>
                    <View style = {[t.wFull, t.pY2, t.mY4, t.borderB, t.justifyBetween, t.flexRow, {borderBottomColor: 'white'}]}>
                        <TextInput placeholder="Mật khẩu" placeholderTextColor='white' style = {[t.fontLight, t.textWhite, {fontSize: wp(4)}]} secureTextEntry = {isPassword ? 'true' : 'false'} value={password} onChangeText={(text) => setPassword(text)}/>
                        <TouchableOpacity style ={[t.w5, t.h5]} onPress={() => setIsPassword(!isPassword)}>
                            {!isPassword ? <EyeIcon size={20} strokeWidth={1} color='white' /> : <EyeSlashIcon size={20} strokeWidth={1} color='white' />}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style = {[t.wFull, t.p3, t.mY4, t.roundedFull, t.itemsCenter, t.alignCenter, {backgroundColor: email&&password ? 'white' : ProjectColor.tymcolor(0.5)}]}>
                        <Text style = {[t.textGray600, {fontSize: wp(4)}]}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('forgetpassword_component')}>
                        <Text style = {[t.textWhite]}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style = {[t.wFull, t.absolute, {bottom: wp(8)}]} entering={LightSpeedInRight.duration(500)} exiting={LightSpeedInLeft.duration(500)}>
                    <TouchableOpacity style = {[t.flex, t.wAuto, t.flexRow, t.justifyEnd, t.itemsCenter]} onPress={() => navigation.navigate('register_component')}>
                        <Text style = {[t.textWhite]}>Chưa phải thành viên OTB? Đăng ký ngay</Text>
                        <ChevronRightIcon size={15} strokeWidth={2} color='white' />
                    </TouchableOpacity>
                </Animated.View>
            </SafeAreaView>
        </View>
    )
}