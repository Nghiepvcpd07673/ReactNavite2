import { FC, memo } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native"

type FooterType = {
    timeUpdate: string;
    backgroudColor :string;
}

export const Footer:FC<FooterType> = memo(props =>{
    const {timeUpdate, backgroudColor} = props;
    return (
        <View style={containerStyle({
            height:100,
            backgroundColor:backgroudColor,
            alignItems:'center',
            justifyContent:'center'
            
        })}>
            <Text style={styles.textStyle}>
            Cập nhật vào ngày  {timeUpdate}
            </Text>
        </View>
    )
})
const styles = StyleSheet.create({
    textStyle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    }

})
const containerStyle =(props:ViewStyle)=>({
    ...props,
})