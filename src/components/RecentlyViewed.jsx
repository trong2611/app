import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList
}from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ProjectColor, themes} from '../theme/index'
import { RecentlyViewedData } from "../constains";
import RecentlyViewedItem from "./RecentlyViewedItems";

export default function RecentlyViewed({navigation}) {

    const splitData = (data) => {
        const rows = [[], []];
        data.forEach((item, index) => {
          rows[index % 2].push({ key: index.toString(), value: item });
        });
        return rows;
    };

    const renderItem = ({item}) => (
        <RecentlyViewedItem key = {item.value.title} image = {item.value.image} title = {item.value.title}/>
    );

    const [row1, row2] = splitData(RecentlyViewedData);

    return(
        <View>
            <View style = {[t.wFull, t.flex, t.flexRow, t.justifyBetween, t.mB4]}>
                <Text style = {[t.fontBold, t.fontSemibold, {fontSize: wp(4.5), fontWeight: 600, color: ProjectColor.color}]}>Dịch vụ đã xem gần đây</Text>
                <TouchableOpacity>
                    <Text style = {[t.underline, {fontSize: wp (3.5)}]}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {[t.flex]}>
                <View style={[t.flexCol,t.justifyBetween]}>
                    <FlatList
                      data={row1}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.key}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={[t.itemsCenter]}
                    />
                    <FlatList
                      data={row2}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.key}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={[t.itemsCenter,{width: wp(70), height: wp(15)}]}
                    />
                </View>
            </ScrollView>
        </View>
    )
}