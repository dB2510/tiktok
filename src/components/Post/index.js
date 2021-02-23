import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    // console.warn('Post');
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri:
              'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
          }}
          style={styles.video}
          onError={(e) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri:
                  'https://wwd.com/wp-content/uploads/2020/10/AE4A7501.jpg?crop=366px%2C407px%2C1303px%2C870px&resize=640%2C415',
              }}
            />
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name={'heart'} size={40} color={'white'} />
            <Text style={styles.statsLabel}>123</Text>
          </View>

          <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={40} color={'white'} />
            <Text style={styles.statsLabel}>123</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={35} color={'white'} />
            <Text style={styles.statsLabel}>123</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@dhruvbodani</Text>
            <Text style={styles.description}>hahaha my boy @xenowits</Text>

            <View style={styles.songRow}>
              {/* Song Icon */}
              <Entypo name={'beamed-note'} size={24} color={'white'}></Entypo>
              {/* Song Name */}
              <Text style={styles.songName}>In the end</Text>
            </View>
          </View>

          <Image
            style={styles.songImage}
            source={{
              uri:
                'https://wwd.com/wp-content/uploads/2020/10/AE4A7501.jpg?crop=366px%2C407px%2C1303px%2C870px&resize=640%2C415',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
