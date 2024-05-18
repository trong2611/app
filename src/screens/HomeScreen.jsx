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


export default function HomeScreen() {

    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const scrollViewRef = useRef(null);

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

    const handleScroll = (event) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      if (offsetY < 0 && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
      }
    };
  
    useEffect(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
      }
    }, []); // Chạy chỉ một lần sau khi render
  

    return(
      <Animated.View style = {[t.flex, t.flex1,{backgroundColor: headerBackgroundColor}]}>
          <SafeAreaView style = {[t.flex, t.flex1, t.justifyCenter]}>
              <Animated.View style={{height: headerHeight,backgroundColor: headerBackgroundColor}}>
                <Header/>
              </Animated.View>
              <Animated.ScrollView style = {[t.flex1, t.flex, t.bgWhite]} showsVerticalScrollIndicator={false} ref={scrollViewRef}
                onScroll={Animated.event([
                  { nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false, listener: handleScroll}
                )}
                scrollEventThrottle={0}
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
              {/* dịch vụ đã xem gần đây */}
              <View style = {[t.mY10,t.mX5,{ height: wp(45)}, t.flex, t.flexCol, t.itemsCenter]}>
                  <RecentlyViewed/>
              </View>
              {/* địa điểm */}
              <View style = {[t.mX5,{ height: wp(45)}, t.flex, t.flexCol, t.itemsCenter]}>
                  <Destination/>
              </View>
              {/* Top 10 trải nghiệm hot nhất */}
              <View style = {[t.mX5,{ height: wp(85)}, t.flex, t.flexCol, t.itemsCenter]}>
                  <HottestExperience/>
              </View>

              <View style = {[t.mX5,{ height: wp(70)}, t.flex, t.flexCol, t.itemsCenter]}>
                  <Location/>
              </View>

              <View style = {[t.mX5,{ height: wp(75)}, t.flex, t.flexCol, t.itemsCenter]}>
                  <DestinationSmall/>
              </View>

              <View style = {[t.mX5,{ height: wp(80)}, t.flex, t.flexCol, t.itemsCenter]}>
                  <Poster/>
              </View>
          </Animated.ScrollView>
        <StatusBar barStyle="light-content"/>
      </SafeAreaView>
      </Animated.View>
    )

}