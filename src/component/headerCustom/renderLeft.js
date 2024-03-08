import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const renderLeft = () => {
  return (
    leftComponent || (
        <View>
            { iconLeft ?(
                    <Pressable hitSlop={15} onPress={onPressLeft || Navigator.goback}>
                       <Text><Icon name="rocket" size={30} color="#900" /></Text>
                    </Pressable>

            ):(
                <View style={{width: leftIconSize, height: leftIconSize}} />
            )}
        </View>
    )
  )
}

export default renderLeft