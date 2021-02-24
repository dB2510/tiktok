import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';

const post = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'dhruvbodani',
    imageUri: 'https://wwd.com/wp-content/uploads/2020/10/AE4A7501.jpg?crop=366px%2C407px%2C1303px%2C870px&resize=640%2C415'
  },
  description: 'hahaha my boy @xenowits',
  song: 'In the end',
  songImage: 'https://wwd.com/wp-content/uploads/2020/10/AE4A7501.jpg?crop=366px%2C407px%2C1303px%2C870px&resize=640%2C415',
  likes: 123,
  comments: 12,
  shares: 44,
  videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'
};

const Home = () => {
  return (
    <View>
      <Post post={post}/>
    </View>
  );
};

export default Home;