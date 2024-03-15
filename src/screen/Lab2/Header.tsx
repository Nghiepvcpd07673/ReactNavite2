import { FC, memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { UserType } from "./Main";

type HeaderType = {
  user : UserType
}

 export const Header:FC<HeaderType>= memo(props =>{
    const {user} = props;
  console.log('re-render header');
        return (
            <View style={style.containerStyle}>
               <Image style={style.avatarStyle} resizeMode='center' source={{uri: user.avtar}}/>
               <View style={style.textContainer}>
               <Text style={style.greentingText}>Chào ngày mới</Text>
               <Text style={style.textName}>Tôi là Nghiệp </Text>
               </View>
            </View>
        )  
} )

const style =StyleSheet.create({
    containerStyle:{
        height:100,
        backgroundColor:'#FFFFFF',
        padding:10,
        alignItems:'center',
        flexDirection:'row',

    },
    avatarStyle:{
        height:70,
        width:70
    },
    textContainer:{
        marginLeft:20,
        flexWrap:'wrap'
    },
    greentingText:{
        fontSize:20,
        fontWeight:'bold'
    },
    textName:{
        fontSize:16,
        color:'blue'
    }
})