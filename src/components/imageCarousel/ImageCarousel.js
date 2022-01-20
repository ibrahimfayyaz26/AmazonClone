import React, {useState, useCallback} from 'react';
import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import styles from './styles';

const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = useWindowDimensions().width;

  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);

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
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            key={index}
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
