import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, onPress }) => {
  return (
    <View style={{
      width:'100%',
      height:50,
      
      alignItems:'center'
    }}>
      <TouchableOpacity  onPress={onPress} title={title} style={{
         borderRadius: 10, 
         borderColor: 'black', 
         borderWidth: 1, 
         height: 40, 
         width:'90%', 
         alignItems:'center',
         color:'white',
         justifyContent:'center',
         backgroundColor:'#6F97B7'}}>
        <Text style={{ color: 'black',fontWeight:'bold',fontSize:18 }}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button