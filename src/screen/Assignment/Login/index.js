import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import Input from '../../../component/Input/input'
import Button from '../../../component/Button'
import Seperator from '../../../component/Seperator'


const Login = ({navigation}) => {
    return (
        
        <ImageBackground source={require('../../../asets/backgroud_login.jpg')} style={styles.background}>
            <StatusBar backgroundColor="#4F6D7A" barStyle="light-content" />

            <View style={styles.conatiner}>

                <View style={styles.icon}>
                    <Image source={require('../../../asets/avatar.jpg')} style={{ width: '100%', height: '100%', borderRadius: 62 }} />
                    <Text style={{paddingLeft:20,marginTop:10,fontSize:30,fontWeight:'bold'}}>Login</Text>
                </View>
                <View>
                    <Input />
                </View>
                <View style={{
                    marginHorizontal: 20,
                    marginVertical: 20
                }}>
                    <Button title="Login" onPress={navigation.navigate('SinUp')}/>
                </View>
                <Seperator text="Or login with"></Seperator>
                <View style={{flexDirection:'row',height:50,marginHorizontal:50,justifyContent:'space-between',marginBottom:20}}>
                    <TouchableOpacity
                     style={styles.buttonAdd}>
                        <Image style={styles.logo} source={require('../../../asets/logoGG.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={styles.buttonAdd}>
                        <Image style={styles.logo} source={require('../../../asets/logoFB.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={styles.buttonAdd}>
                        <Image style={styles.logo} source={require('../../../asets/logoPhone.jpg')}/>
                    </TouchableOpacity>
                    
                </View>
                <Text style={styles.footerText}>
                Don't have an account?
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex:1,
        alignItems: 'center'

    },
    conatiner: {
        width: '80%',
        height: 'auto',
       
        marginTop: '25%',
        shadowOpacity:10,
        borderWidth:0.1,
        shadowColor:'red',
        shadowOffset:10,
        shadowRadius:10,
        shadowColor: 'red', // Màu của độ bóng
         shadowOffset: { width: 10, height:10}, // Điều chỉnh vị trí của độ bóng
         shadowOpacity: 0.5, // Độ trong suốt của độ bóng
         shadowRadius: 10, // Bán kính của độ bóng
         elevation: 200, // Độ cao của độ bóng trên cá
         borderRadius:10
        
    },
    icon: {
        width: 120,
        height: 120,
        borderTopColor: 'red',
        borderBottomColor: 'red',
        borderLeftColor: 'blue',
        borderRightColor: '#763926',
        borderWidth: 3,
        marginHorizontal: '30%',
        marginVertical: 1,
        top: '-10%',
        borderRadius: 60
    },
    buttonAdd:{
        
        borderRadius:25,
        width:50
    },
    logo:{
        width:'100%',
        height:'100%',
        borderRadius:25,
        
    },
    footerText:{
        color:'black',
        marginBottom:100,
        textAlign:'center'
    },
    footerLink:{
        fontWeight:'bold'
    }

})