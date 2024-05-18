import React, {Component, useEffect, useState} from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { 
    MagnifyingGlassIcon,
    MapIcon,
    BellIcon,
}from 'react-native-heroicons/outline';
import { ProjectColor } from "../theme";
import { optionData, placeholderData } from "../constains";

export default function Header() {

        const [placeholderIndex, setPlaceholderIndex] = useState(0);
        const [displayedText, setDisplayedText] = useState('');

        useEffect(() => {
          let currentIndex = 0;
          let displayInterval = setInterval(() => {
            if (currentIndex < placeholderData[placeholderIndex].length) {
              setDisplayedText((prev) => prev + placeholderData[placeholderIndex][currentIndex]);
              currentIndex++;
            } else {
              clearInterval(displayInterval);
              setTimeout(() => {
                setDisplayedText('');
                setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderData.length);
              },3500);
            }
          }, 100);
      
          return () => clearInterval(displayInterval);
        }, [placeholderIndex]);

    return(
        <View style = {[t.mX2, t.flexRow, t.mY2]}>
            <View style = {[t.flexRow, t.itemsCenter, t.bgGray100, t.roundedFull, t.pX4, t.pY3, t.mX2, t.pL,{flex: 3}]}>
                <MagnifyingGlassIcon size={15} strokeWidth={4} color={ProjectColor.iconColor}/>
                <TextInput
                  placeholder={displayedText}
                  placeholderTextColor={ProjectColor.iconColor}
                  style = {[t.flex1, t.textBase, t.pX3, t.trackingWider, {fontSize: 15}]}
                />
            </View>
            <View style ={[t.flex, t.flex1, t.flexRow]}>
                <TouchableOpacity style = {[t.bgTransparent, t.flex1, t.justifyCenter, t.itemsCenter]}>
                    <MapIcon size={23} strokeWidth={2} color={ProjectColor.iconColor}/>
                </TouchableOpacity>
                <TouchableOpacity style = {[t.bgTransparent, t.flex1, t.justifyCenter, t.itemsCenter]}>
                    <BellIcon size={23} strokeWidth={2} color={ProjectColor.iconColor}/>
                </TouchableOpacity>
            </View>
        </View>
    )

}