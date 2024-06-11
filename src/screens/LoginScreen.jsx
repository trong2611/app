import React, {Component, useEffect, useState} from "react";
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
    XMarkIcon,
    ChevronDownIcon
}from 'react-native-heroicons/outline';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";
import { ProjectColor } from "../theme";
import { loginScreenData, loginData } from "../constains";
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';
import LoginButton from "../components/LoginBotton";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({navigation}) {
    navigation = useNavigation();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loginScreenData.length);
      }, 8000); 
      return () => clearInterval(interval);
    }, []);

    const customZoomIn = {
        from: {
            transform: [{ scale: 1 }],
          },
          to: {
            transform: [{ scale: 1.2 }], 
          }
    };

    return(
        <View style = {[t.flex,t.flex1, t.itemsStart,t.justifyStart, t.overflowHidden]}>
            <Animatable.Image
                key={currentIndex}
                animation={customZoomIn}
                duration={8000} 
                source={{ uri: loginScreenData[currentIndex].image }}
                style = {[t.absolute,t.top0, t.wFull,{height:'65%'}]}
                resizeMode="cover"
            />
            {/* <Image source={loginScreenData[currentIndex].image} style = {[t.absolute,t.top0, t.wFull,{height:'65%'}]} resizeMode="cover"/> */}
            <LinearGradient
                colors={[ProjectColor.color(1), ProjectColor.color(0)]}
                style={[t.absolute,t.wFull,{height: '35%', bottom: '35%'}]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            />
            <View style = {[t.wFull,t.absolute, t.bottom0,{height: '35%', backgroundColor: ProjectColor.color(1)}]}></View>
            <View style={[t.absolute,t.wFull,t.justifyCenter,t.itemsCenter,{top:'40%'}]}>
                <Text style = {[t.textWhite, t.fontSemibold,t.mB4,{fontWeight: 600, fontSize: wp(7)}]}>Đăng nhập / Đăng ký</Text>
                <Text style = {[t.textWhite, t.fontSemibold,t.mB10,{fontWeight: 400, fontSize: wp(4)}]}>Khám phá địa điểm tiếp theo</Text>
                <LoginButton icon = {loginData[0].image} name = {loginData[0].title}/>
                <LoginButton icon = {loginData[1].image} name = {loginData[1].title}/>
                <LoginButton icon = {loginData[2].image} name = {loginData[2].title}/>
                <LoginButton icon = {loginData[3].image} name = {loginData[3].title} link = 'login_component'/>
                {/* <LoginButton icon = {loginData[4].image} name = {loginData[4].title}/> */}
                <ChevronDownIcon style = {[t.textWhite, t.mY2]}/>
            </View>
            {/* <XMarkIcon style = {[t.textWhite, t.mY16, t.mX8,{width: wp(10), height: wp(10)}]} onPress={() => {navigation.goBack()}}/> */}
        </View>
    )
}