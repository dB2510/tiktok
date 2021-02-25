import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import posts from '../../../data/posts';
import Post from '../../components/Post';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const Home = () => {
  return (
    <View>
      <FlatList
            data={posts}
            renderItem={({item}) => <Post post={item}/>}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
        />
      {/* <RecyclerListView
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={renderRow}
      /> */}
    </View>
  );
};

export default Home;
