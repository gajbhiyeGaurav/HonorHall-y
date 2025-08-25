import React from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

type VideoItem = {
  id: string;
  uri: string;
};

const videoData: VideoItem[] = [
  {
    id: '1',
    uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  {
    id: '2',
    uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: '3',
    uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  {
    id: '4',
    uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: '5',
    uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  {
    id: '6',
    uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: '7',
    uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
];

const VideoComponent = ({ uri }: { uri: string }) => {
  return (
    <View style={{ backgroundColor: "#FCEADE" }}>
      <Video
        source={{ uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        useNativeControls
        style={styles.video}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Ionicons name="person-circle" size={55} color="black" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>User Name</Text>
          <Text style={{ fontSize: 13 }}>#Subtitle, #video, #hashtag</Text>
        </View>
      </View>
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoComponent uri={item.uri} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    backgroundColor: '#fff',
  },
  video: {
    width: width - 20,
    height: 220,
    alignSelf: 'center',
    backgroundColor: '#000',
  },
});
