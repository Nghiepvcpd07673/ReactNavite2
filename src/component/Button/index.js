import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({onPress,title}) => {
    return (
        <View>
           <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.contentText}>{title}</Text>
           </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#16A2F9',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText:{
        fontSize:20,
        fontWeight:'bold'
    }
})