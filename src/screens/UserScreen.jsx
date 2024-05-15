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
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {themes} from '../theme/index';

export default function UserScreen() {

    return(
        <View style = {[t.flex1, t.itemsCenter, t.justifyCenter]}>
            <Text>User Screen</Text>
        </View>
    )
}