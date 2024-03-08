import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react'

const renderCenter = () => {
  return (
    centerComponent || (
      <View style = {styles.containerCenter}>
          <Text style = {styles.title} numberOfLines={numberOfLines}>
              {title}
          </Text>
      </View>
  )
  )
}

export default renderCenter