import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen({navigation}) {

    navigation = useNavigation();
    return(
        <View style = {[t.flex, t.flex1, t.justifyEnd]}>
            <Image
            source={require("../../assets/img/bg.jpg")}
            style = {[t.hFull, t.wFull, t.absolute]}
            resizeMode="stretch"
            />
            <View style = {[t.p5, t.pB20, t.justifyCenter, t.itemsCenter]}>
                <LinearGradient
                    colors={["transparent", "rgba(3,105,161,0.8)"]}
                    style={[t.absolute, t.bottom0,{ width: wp(100), height: wp(60) }]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
                <View style = {[t.mY4]}>
                    <Text style = {[t.textWhite, t.fontBold, t.text5xl, t.mY4, {fontSize:wp(10)}]}>Traveling made easy!</Text>
                    <Text style = {[t.textWhite, t.fontMedium,  t.mY4, {fontSize:wp(4)}]}>
                        Experience the world's best adventure around the world with us
                    </Text>
                </View>
                <TouchableOpacity style = {[t.bgOrange500,t.w56, t.itemsCenter, t.justifyCenter, t.pY4, t.pX12, t.roundedFull]}
                                  onPress={() => navigation.navigate('bottom_tabs')}
                >
                    <Text style = {[t.textWhite, t.fontBold, {fontSize:wp(5.5)}]}>Let's go!</Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="light-content"/>
        </View>
    )
}