import { View, Text, Pressable } from 'react-native'
import React from 'react'

const renderRight = () => {
  return (
    rightComponent || (
    <View style = {styles.containerRight}>
        { iconRight ? (
            <Pressable hitSlop={15} onPress={onPressRight}>
            </Pressable>
        ): (
            <View style = {{width: rightIconSize, height: rightIconSize}}/>
        )}

    </View>
)
    )
  
}

export default renderRight