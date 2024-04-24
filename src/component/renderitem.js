/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  Image,
  View,
  ImageBackground,
} from 'react-native';
const {height} = Dimensions.get('window');
const heavyComputation = item => {
  const start = performance.now();
  const computedValue = {
    title: `${item.title}`,
    id: `${Number(item.id)}`,
    content: `${item.content}`,
    type: `${item.type}`,
    image: `${item.image}`,
  };
  const end = performance.now();
  return computedValue;
};

export const Post = React.memo(({item}) => {
  const details = React.useMemo(() => heavyComputation(item), [item]);
  if (item.type == 'image') {
    return (
      <View style={styles.item}>
        <Image source={{uri: item?.image_url, height: height / 3}} />
        <Text style={styles.title}>{details?.content}</Text>
        <ImageBackground
        source={{uri: item?.image_url, height: height / 13}}
        imageStyle={{opacity:0.5,resizeMode:'cover'}}
          style={{
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0,0.8)',
            position: 'absolute',
            marginTop: height / 10,
            paddingVertical: '4%',
            width: '100%',
          }}>
          <Text
            style={[
              styles.title,
              {
                color: '#FFFFFF',
                textAlign: 'left',
                paddingHorizontal: 20,
                fontWeight: '900',
              },
            ]}>
            {details?.title}
          </Text>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.item}>
        <Image source={{uri: item?.image, height: height}} />
        <Text style={styles.title}> {details?.title}</Text>
        <Text style={styles.title}>{details?.content}</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    // padding: 20,
    // width: '45%',
    height: height,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  title: {
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight:'400',
    paddingHorizontal:'1%'
  },
  details: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#eeeeee',
    height: height / 5,
  },
});
