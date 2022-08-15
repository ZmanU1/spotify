/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import AllAlbum from '../components/MyAllAlbums';

const albumCategory = [{
  id: '2',
  title: 'Green Day hapy vibes',
  albums: [
    {
      id: '1',
      imageUri: 'https://m.media-amazon.com/images/I/6191UqQ-xCL._SX425_.jpg',
      artistsHeadLine: 'album 1, cool',
    },
    {
      id: '2',
      imageUri: 'https://m.media-amazon.com/images/I/A1FqIE46AzL._SX425_.jpg',
      artistsHeadLine: 'album 2, cool',
    },
    {
      id: '3',
      imageUri: 'https://m.media-amazon.com/images/I/81oXCKIWJLL._SX425_.jpg',
      artistsHeadLine: 'album 3, cool',
    },
    {
      id: '4',
      imageUri: 'https://m.media-amazon.com/images/I/91kny7EUh5L._SX425_.jpg',
      artistsHeadLine: 'album 4, cool',
    },
    {
      id: '5',
      imageUri: 'https://m.media-amazon.com/images/I/81lTTPgJEUL._SX425_.jpg',
      artistsHeadLine: 'album 5, cool',
    },
    {
      id: '6',
      imageUri: 'https://images-eu.ssl-images-amazon.com/images/I/61e3FaHueCL._SX300_SY300_QL70_ML2_.jpg',
      artistsHeadLine: 'album 6, cool',
    },
  ]
},
{
  id: '2',
  title: 'Green Day hapy vibes',
  albums: [
    {
      id: '1',
      imageUri: 'https://m.media-amazon.com/images/I/6191UqQ-xCL._SX425_.jpg',
      artistsHeadLine: 'album 1, cool',
    },
    {
      id: '2',
      imageUri: 'https://m.media-amazon.com/images/I/A1FqIE46AzL._SX425_.jpg',
      artistsHeadLine: 'album 2, cool',
    },
    {
      id: '3',
      imageUri: 'https://m.media-amazon.com/images/I/81oXCKIWJLL._SX425_.jpg',
      artistsHeadLine: 'album 3, cool',
    },
    {
      id: '4',
      imageUri: 'https://m.media-amazon.com/images/I/91kny7EUh5L._SX425_.jpg',
      artistsHeadLine: 'album 4, cool',
    },
    {
      id: '5',
      imageUri: 'https://m.media-amazon.com/images/I/81lTTPgJEUL._SX425_.jpg',
      artistsHeadLine: 'album 5, cool',
    },
    {
      id: '6',
      imageUri: 'https://images-eu.ssl-images-amazon.com/images/I/61e3FaHueCL._SX300_SY300_QL70_ML2_.jpg',
      artistsHeadLine: 'album 6, cool',
    },
  ]
},
{
  id: '3',
  title: 'Green Day hapy vibes',
  albums: [
    {
      id: '1',
      imageUri: 'https://m.media-amazon.com/images/I/6191UqQ-xCL._SX425_.jpg',
      artistsHeadLine: 'album 1, cool',
    },
    {
      id: '2',
      imageUri: 'https://m.media-amazon.com/images/I/A1FqIE46AzL._SX425_.jpg',
      artistsHeadLine: 'album 2, cool',
    },
    {
      id: '3',
      imageUri: 'https://m.media-amazon.com/images/I/81oXCKIWJLL._SX425_.jpg',
      artistsHeadLine: 'album 3, cool',
    },
    {
      id: '4',
      imageUri: 'https://m.media-amazon.com/images/I/91kny7EUh5L._SX425_.jpg',
      artistsHeadLine: 'album 4, cool',
    },
    {
      id: '5',
      imageUri: 'https://m.media-amazon.com/images/I/81lTTPgJEUL._SX425_.jpg',
      artistsHeadLine: 'album 5, cool',
    },
    {
      id: '6',
      imageUri: 'https://images-eu.ssl-images-amazon.com/images/I/61e3FaHueCL._SX300_SY300_QL70_ML2_.jpg',
      artistsHeadLine: 'album 6, cool',
    },
  ]
},
{
  id: '4',
  title: 'Green Day hapy vibes',
  albums: [
    {
      id: '1',
      imageUri: 'https://m.media-amazon.com/images/I/6191UqQ-xCL._SX425_.jpg',
      artistsHeadLine: 'album 1, cool',
    },
    {
      id: '2',
      imageUri: 'https://m.media-amazon.com/images/I/A1FqIE46AzL._SX425_.jpg',
      artistsHeadLine: 'album 2, cool',
    },
    {
      id: '3',
      imageUri: 'https://m.media-amazon.com/images/I/81oXCKIWJLL._SX425_.jpg',
      artistsHeadLine: 'album 3, cool',
    },
    {
      id: '4',
      imageUri: 'https://m.media-amazon.com/images/I/91kny7EUh5L._SX425_.jpg',
      artistsHeadLine: 'album 4, cool',
    },
    {
      id: '5',
      imageUri: 'https://m.media-amazon.com/images/I/81lTTPgJEUL._SX425_.jpg',
      artistsHeadLine: 'album 5, cool',
    },
    {
      id: '6',
      imageUri: 'https://images-eu.ssl-images-amazon.com/images/I/61e3FaHueCL._SX300_SY300_QL70_ML2_.jpg',
      artistsHeadLine: 'album 6, cool',
    },
  ]
},]
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AllAlbum 
        all={albumCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
