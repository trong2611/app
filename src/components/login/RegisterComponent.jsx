import React, {Component, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../../theme/index';
import { LinearGradient } from "expo-linear-gradient";
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, EyeSlashIcon, XMarkIcon } from "react-native-heroicons/outline";
import Animated, { BounceIn, FadeInRight, LightSpeedInLeft, LightSpeedInRight } from "react-native-reanimated";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function RegisterComponent({navigation}) {
    navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
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
                <View style = {[t.wFull, t.pY12, t.itemsEnd]}>
                    <Animated.Text style = {[t.textWhite, t.text3xl, t.fontLight]} entering={LightSpeedInLeft.duration(500)} exiting={LightSpeedInRight.duration(500)}>Tạo tài khoản</Animated.Text>
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
                    <View style = {[t.wFull, t.pY4, t.flexRow, t.justifyCenter, t.itemsCenter, t.pX4]}>
                        <CheckBox containerStyle = {[t.p0,]} checked={isChecked} onPress={() => setIsChecked(!isChecked)}/>
                        <View style ={[t.wFull, t.flexRow, t.flexWrap]}>
                            <Text style = {[t.textWhite]}>Tôi đã đọc và đồng ý với </Text>
                            <TouchableOpacity>
                                <Text style = {[t.underline, t.fontSemibold, t.textWhite]}>Điều khoản & Điều kiện</Text>
                            </TouchableOpacity>
                            <Text style = {[t.textWhite]}> & </Text>
                            <TouchableOpacity>
                                <Text style = {[t.underline, t.fontSemibold, t.textWhite]}>Chính sách bảo mật</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style = {[t.wFull, t.p3, t.mY4, t.roundedFull, t.itemsCenter, t.alignCenter, {backgroundColor: email&&password&&isChecked ? 'white' : ProjectColor.tymcolor(0.5)}]}>
                        <Text style = {[t.textGray600, {fontSize: wp(4)}]}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <View style = {[t.wFull, t.absolute, {bottom: wp(8)}]}>
                    <TouchableOpacity style = {[t.flex, t.wAuto, t.flexRow, t.itemsCenter]} onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={15} strokeWidth={2} color='white' />
                        <Animated.Text style = {[t.textWhite]} entering={LightSpeedInLeft.duration(500)} exiting={LightSpeedInRight.duration(500)}>Đã có tài khoản OTB</Animated.Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}