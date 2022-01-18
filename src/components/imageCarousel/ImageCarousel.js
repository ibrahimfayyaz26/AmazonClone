import React from 'react';
import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import styles from './styles';

const ImageCarousel = ({images}) => {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: width - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="center"
        snapToInterval={width - 20}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
