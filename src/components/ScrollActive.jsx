import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ProjectColor } from '../theme';
import SuggestedLocation from './SuggestedLocations';
import SuggestedOrtherLocation from './SuggestedOrtherLocation';

const categories = [
  { id: 1, title: 'Gợi ý', content: 'Content for Category 1' },
  { id: 2, title: 'Asia', content: 'Content for Category 2' },
  
];

const screenWidth = Dimensions.get('window').width;

export default ScrollActive = ({navFixed}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const scrollViewRef = useRef(null);
  const horizontalScrollViewRef = useRef(null);

  const handleCategoryPress = (category, index) => {
    setSelectedCategory(category);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true });
    }
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(contentOffsetX / screenWidth);
    setSelectedCategory(categories[activeIndex]);
    if (horizontalScrollViewRef.current) {
      horizontalScrollViewRef.current.scrollTo({ x: activeIndex * 100, animated: true });
    }
  };

  return (
    <View>
      <ScrollView ref={horizontalScrollViewRef} horizontal showsHorizontalScrollIndicator={true} style = {[t.pY3, t.pX3, navFixed ? [t.absolute] : {}] }>
        {categories.map((category, index) => (
          <TouchableOpacity key={category.id} style={[t.pX3, t.pY2, index == 0 ? [t.mR2, t.mL0] : t.mX2, t.hAuto]}
            onPress={() => handleCategoryPress(category, index)}
          >
            <Text style={[t.fontSemibold,{fontSize: wp(4), fontWeight: 400},selectedCategory.id === category.id && [{color: ProjectColor.color(1), fontWeight: 600},t.underline]]}>
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
        showsHorizontalScrollIndicator={false}
        style={[t.flex, t.mY6, t.flexRow]}
        contentContainerStyle = {[navFixed ? {marginTop: wp(10)} : {}]}
      >
        <SuggestedLocation key={1}/>
        <SuggestedOrtherLocation key={2}/>
      </ScrollView>
    </View>
  );
};

