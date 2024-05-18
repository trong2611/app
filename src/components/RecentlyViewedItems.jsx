import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Dimensions
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index'
import { optionData } from "../constains";

const { width } = Dimensions.get('window'); 
const squareSize = width * 0.15; 

export default function RecentlyViewedItem(props) {
    return(
        <TouchableOpacity style = {[{width: wp(70), height: wp(15)}, t.flex]}>
            <Image
                source={props.image}
                style = {[ t.absolute,{width: squareSize, height: squareSize, borderRadius: 10}]}
                resizeMode="cover"
            />
            <Text style = {[t.bgTransparent, t.pL20, t.pY2, t.fontSemibold,{fontSize: wp(3.3), fontWeight: 400,color: ProjectColor.text}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}