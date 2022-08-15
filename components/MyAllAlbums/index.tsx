import { View, Text , FlatList } from 'react-native'
import React from 'react'
import AlbumCategory from '../AlbumCategory'
import {AlbumCategoryProps} from '../AlbumCategory'

export type allAlbumProps = {
    all: [AlbumCategoryProps]
}

const AllAlbum = (props: allAlbumProps) => {
  return (
    <View>
      <FlatList 
        data={props.all}
        renderItem={({item}) =>       
        <AlbumCategory 
            title={item.title} 
            albums={item.albums} />}
            keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default AllAlbum