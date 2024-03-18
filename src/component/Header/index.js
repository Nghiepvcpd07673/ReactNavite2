import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import  Icon  from  'react-native-vector-icons/dist/Entypo' ;
const Header = ({tile,icon_Avatar}) => {
    
  return (
    <View style={style.conatiner}>
        <Text> <TouchableOpacity style={style.icon}>
        <Icon name="chevron-with-circle-left" size={30} color="#900" />
        </TouchableOpacity></Text>
        <Text> {tile}</Text>
        <Text style={style.iconAvatar}> <Image source={require='../../asets/image_Sea.jpg'}/> </Text>
    </View>
  )
}

export default Header
const style = StyleSheet.create({
conatiner:{
    

    height:40,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,  
    borderColor:'gray',
  
    alignItems:'center'
},

iconAvatar:{
    
    borderWidth:1,
    width:40,
    height:40,
    marginRight:20,
    borderRadius:30
}
})