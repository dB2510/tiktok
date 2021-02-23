import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        // console.warn('Post');
        setPaused(!paused);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={{uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'}}
                    style={styles.video}
                    onError={(e) => console.log(e)}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>

            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                    <Text style={{fontSize: 20, color: 'white'}}>side</Text>
                </View>
                
                <View style={styles.bottomContainer}>
                    <Text style={styles.handle}>@dhruvbodani</Text>
                    <Text style={styles.description}>hahaha my boy @xenowits</Text>

                    <View style={styles.songRow}>
                        {/* Song Icon */}
                        <Entypo name={"beamed-note"} size={24} color={'white'}></Entypo>
                        {/* Song Name */}
                        <Text style={styles.songName}>In the end</Text>
                    </View>

                </View>
            </View>

        </View>
    );
};

export default Post;