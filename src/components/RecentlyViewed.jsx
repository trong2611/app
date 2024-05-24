import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
    Dimensions
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index'
import { RecentlyViewedData } from "../constains";

const { width } = Dimensions.get('window'); 
const squareSize = width * 0.15; 

export default function RecentlyViewed({navigation}) {

    const splitData = (data) => {
        const rows = [[], []];
        data.forEach((item, index) => {
          rows[index % 2].push({ key: index.toString(), value: item });
        });
        return rows;
    };

    const [row1, row2] = splitData(RecentlyViewedData);

    return(
        <View style = {[t.flex, t.flexCol]}>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.itemsCenter, t.mB3, t.pX5]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.text}]}>Dịch vụ đã xem gần đây</Text>
                <TouchableOpacity>
                    <Text style = {[t.underline, {fontSize: wp (3.5)}]}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style = {[t.flex, t.flexCol, t.overflowHidden]}>
                    <FlatList
                    data={RecentlyViewedData}
                    horizontal
                    showsHorizontalScrollIndicator= {false}
                    keyExtractor={item => item.title}
                    contentContainerStyle={[t.itemsCenter, t.pX5, t.mY2]}
                    decelerationRate={0}
                    scrollEnabled={false}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity style = {[{width: wp(70), height: wp(15)}, t.flex, t.pX2]}>
                                <Image source={item.image} style = {[ t.absolute,{width: squareSize, height: squareSize, borderRadius: 10}]} resizeMode="cover" />
                                <Text style = {[t.bgTransparent, t.pL20, t.pY2, t.fontSemibold,{fontSize: wp(3.3), fontWeight: 400,color: ProjectColor.text}]}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    />
                    <FlatList
                    data={RecentlyViewedData}
                    horizontal
                    showsHorizontalScrollIndicator= {false}
                    keyExtractor={item => item.title}
                    contentContainerStyle={[t.itemsCenter, t.pX5,  t.mY2]}
                    decelerationRate={0}
                    scrollEnabled={false}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity style = {[{width: wp(70), height: wp(15)}, t.flex, t.pX2]}>
                                <Image source={item.image} style = {[ t.absolute,{width: squareSize, height: squareSize, borderRadius: 10}]} resizeMode="cover" />
                                <Text style = {[t.bgTransparent, t.pL20, t.pY2, t.fontSemibold,{fontSize: wp(3.3), fontWeight: 400,color: ProjectColor.text}]}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
