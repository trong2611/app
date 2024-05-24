import React, {Component, useEffect, useReducer, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Dimensions,
    FlatList,
    Animated
}from 'react-native';
import { 
    PlusIcon
}from 'react-native-heroicons/outline';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { DestinationData } from "../constains";

const{width, height} = Dimensions.get('screen')
const SPACING  = 15;
const ITEM_SIZE = width*0.75;
const SPACE_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function Discount({navigation}) {
    
    const [sliders, setSlider] = useState([{key: 'left-spacer'},...DestinationData,{key: 'right-spacer'}])
    const scrollX = useRef(new Animated.Value(0)).current;
    return(
        <View style = {[t.flex1, t.justifyCenter, t.itemsCenter, {height: wp(55)}, t.overflowHidden]}>
            <Animated.FlatList
                data = {sliders}
                keyExtractor={item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={t.itemsCenter}
                snapToInterval={ITEM_SIZE}
                decelerationRate={0}
                bounces={false}
                onScroll = {Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}
                renderItem={({item, index}) => {
                    const inputRange = [
                        (index - 2) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE
                    ]
                
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.85, 1.1, 0.85],
                        extrapolate: 'clamp'
                    })
                    if(!item.image){
                        return <View style = {{ width: SPACE_ITEM_SIZE,}}></View>
                    }
                    return (
                        <TouchableOpacity style = {[{width: ITEM_SIZE}]}>
                            <Animated.View style={[t.alignCenter, t.overflowHidden, { marginHorizontal: SPACING, borderRadius: 5, transform:[{scale: scale}]}]}>
                                <Image source={item.image} style =  {[t.wFull,{height: wp(40)}]} resizeMode="cover"/>
                            </Animated.View>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity style = {[t.absolute, t.w8, t.h8, t.roundedFull, t.itemsCenter, t.justifyCenter, t.bottom0, {backgroundColor: ProjectColor.tymcolor(0.5)}]}>
                <PlusIcon size={25} strokeWidth={4} color={ProjectColor.color(0.5)} />
            </TouchableOpacity>
        </View>
    )
}