import React, {Component, useEffect, useState} from "react";
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
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { 
    MagnifyingGlassIcon,
    MapIcon,
    BellIcon,
    SquaresPlusIcon,
}from 'react-native-heroicons/outline';
import { ProjectColor } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Option from "../components/Option";
import { optionData, placeholderData } from "../constains";
import RecentlyViewed from "../components/RecentlyViewed";
import Destination from "../components/Destinations";
import HottestExperience from "../components/HottestExperience";



export default function HomeScreen() {

        const [currentIndex, setCurrentIndex] = useState(0);
        const [displayText, setDisplayText] = useState('');
      
        useEffect(() => {
          const updateText = () => {
            const currentText = placeholderData[currentIndex];
            let displayIndex = 0;
            setDisplayText('');
      
            const interval = setInterval(() => {
              if (displayIndex < currentText.length) {
                setDisplayText((prev) => prev + currentText.charAt(displayIndex));
                displayIndex++;
              } else {
                clearInterval(interval);
              }
            }, 100); // Thời gian xuất hiện từng ký tự, có thể điều chỉnh theo ý muốn
      
            const timeout = setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholderData.length);
            }, 2000); // Thay đổi dữ liệu sau mỗi 2 giây
      
            return () => {
              clearInterval(interval);
              clearTimeout(timeout);
            };
          };
      
          const timeoutId = setTimeout(updateText, 2000);
      
          return () => clearTimeout(timeoutId);
        }, [currentIndex]);
      
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholderData.length);
        }, 2000); // Thay đổi dữ liệu sau mỗi 2 giây
      
        return () => clearInterval(interval);
    }, []);

    return(
      <SafeAreaView style = {[t.flex, t.flex1, t.bgWhite, t.justifyCenter, {backgroundColor: ProjectColor.color(1)}]}>
          <ScrollView style = {[t.flex1, t.flex, t.bgWhite]} showsVerticalScrollIndicator={false}>
              <LinearGradient
                  colors={[ProjectColor.color(1), ProjectColor.color(0)]}
                  style={[t.absolute, t.top0,{ width: wp(100), height: wp(50) }]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
              />
              {/* searchbar */}
              <View style = {[t.mX2, t.flexRow, t.mT2]}>
                  <View style = {[t.flexRow, t.itemsCenter, t.bgGray100, t.roundedFull, t.pX4, t.pY3, t.mX2, t.pL,{flex: 3}]}>
                      <MagnifyingGlassIcon size={15} strokeWidth={4} color={ProjectColor.iconColor}/>
                      <TextInput
                        placeholder={displayText}
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
          </ScrollView>
        <StatusBar barStyle="light-content"/>
      </SafeAreaView>
    )

}