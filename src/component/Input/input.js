import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Input = () => {
  const [userName, setUserName] = useState('');
  return (

    <SafeAreaView>
      <View>
        <TextInput

          value={userName}
          style={styles.container}
          placeholder='User Name'
          secureTextEntry={true}
          onChangeText={(user) => setUserName(user)}
        />
          <Text>{userName}</Text>

      
      </View>
    </SafeAreaView>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    borderColor: '#7777',
    borderWidth: 1,
    marginLeft: 10,
    marginVertical:10,
    paddingHorizontal:20

  }
})