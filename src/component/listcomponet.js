/* eslint-disable no-unused-vars */
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Post} from './renderitem';
const {height} = Dimensions.get('window');

const Listcomponet = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://news.homebasket.app/api/8knews/109',
      );
      const data = await response.json();
      setPosts(data.data);
    };

    fetchPosts();
  }, []);

  const renderItem = useCallback(({item}) => {
    console.log(item);
    return <Post item={item} onSelect={setSelectedPostId} />;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled={true}
      />
      {/* <List data={posts} /> */}
    </View>
  );
};

export default Listcomponet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
  },
  item: {
    padding: 20,
    width: '45%',
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
    marginHorizontal: 10,
  },
  title: {
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  details: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#eeeeee',
    height: height / 5,
  },
});
