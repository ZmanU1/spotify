import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

const AlbumScreen = () => {
  
  const route = useRoute(); 
  
  useEffect( effect: () => {
    
    console.log(route);

  }, deps:[])

  return (
    <View>
      <Text style={{color: 'white'}}>AlbumScreen</Text>
    </View>
  )
}

export default AlbumScreen