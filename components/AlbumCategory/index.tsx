import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Album } from '../../types'
import styles from './styles'
import AlbumComponent from '../AlbumComponent'

export type AlbumCategoryProps = {
    id?: string,
    title: string,
    albums: [Album],

}

const AlbumCategory = (props: AlbumCategoryProps) => (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList 
      data={props.albums}
      renderItem={({ item }) => <AlbumComponent album={item} /> }
      keyExtractor={(item) => item.id}
      horizontal
      />
    </View>
)

export default AlbumCategory;