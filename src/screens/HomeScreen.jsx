import React, {Component, useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Platform,
    TextInput,
    Animated,
    Dimensions,
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { 
    SquaresPlusIcon,
}from 'react-native-heroicons/outline';
import { ProjectColor } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Option from "../components/Option";
import { optionData, placeholderData } from "../constains";
import RecentlyViewed from "../components/RecentlyViewed";
import Destination from "../components/Destinations";
import HottestExperience from "../components/HottestExperience";
import Location from "../components/Location";
import DestinationSmall from "../components/DestinationSmall";
import Poster from "../components/Poster";
import Header from "../components/Header";
import Discount from "../components/DiscountConponent";

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerHeight = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [wp(13),wp(12)],
      extrapolate: 'clamp',
    });

    const headerBackgroundColor = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [ProjectColor.color(1), 'white'],
      extrapolate: 'clamp',
    });

    return(
      <Animated.View style = {[t.flex, t.flex1,{backgroundColor: headerBackgroundColor}]}>
          <SafeAreaView style = {[t.flex, t.flex1, t.justifyCenter]}>
              <Animated.View style={[{height: headerHeight,backgroundColor: headerBackgroundColor}]}>
                <Header/>
              </Animated.View>
              <Animated.ScrollView style = {[t.flex1, t.flex, t.bgWhite]} bounces = {false}
                showsVerticalScrollIndicator={false} 
                onScroll={Animated.event([
                  { nativeEvent: { contentOffset: { y: scrollY } } }],
                  {useNativeDriver: false}
                )}
                scrollEventThrottle={16}
              >
              <LinearGradient
                  colors={[ProjectColor.color(1), ProjectColor.color(0)]}
                  style={[t.absolute, t.top0,{ width: wp(100), height: wp(45) }]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
              />
              {/* tùy chọn */}
              <View style = {[t.mX2,t.mT4,{ height: wp(40), borderRadius: 25}, t.bgWhite, t.shadowMd, t.flex, t.flexCol, t.itemsCenter]}>
                  <Option/>
                  <TouchableOpacity style = {[t.flex,t.justifyCenter, t.itemsCenter, t.alignCenter, t.flexRow, t.bgGray200,{width: wp(85), height: wp(8), borderRadius: 10}]}>
                      <SquaresPlusIcon size={20} style = {{color: ProjectColor.color(0.8)}} strokeWidth={3} />
                      <Text style = {[t.mL2, t.fontBold,{color: ProjectColor.text}]}>Tất cả danh mục</Text>
                  </TouchableOpacity>
              </View>
              
              <RecentlyViewed/>
              
              <Destination/>
              
              <HottestExperience/>

              <Location/>

              <DestinationSmall/>

              <Poster/>

              <Discount/>
          </Animated.ScrollView>
        <StatusBar barStyle="light-content"/>
      </SafeAreaView>
      </Animated.View>
    )

}