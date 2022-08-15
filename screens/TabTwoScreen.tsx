import { StyleSheet } from 'react-native';
import AlbumComponent from '../components/AlbumComponent';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const testeur =
{
  id: '1',
  imageUri: 'https://m.media-amazon.com/images/I/6191UqQ-xCL._SX425_.jpg',
  artistsHeadLine: 'album 1, cool',
}

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      
      <AlbumComponent album={testeur}/>
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
