import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../component/Input/input'
import Button from '../../../component/Button'
import Seperator from '../../../component/Seperator'


const Register = () => {
    const [email, setEmail] = useState('');
    return (

        <ImageBackground source={require('../../../asets/backgroud_sinUp.jpg')} style={styles.background}>
            <StatusBar backgroundColor="#4F6D7A" barStyle="light-content" />

            <View style={styles.conatiner}>

                <View style={styles.icon}>
                    <Image source={require('../../../asets/avatar.jpg')} style={{ width: '100%', height: '100%', borderRadius: 62 }} />
                    <Text style={{ marginTop: 10, fontSize: 30, fontWeight: 'bold' }}>Register</Text>
                </View>
                <View>
                    <Input />
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail} />
                </View>
                <View style={{
                    marginHorizontal: 20,
                    marginVertical: 20
                }}>
                    <Button title="Login" />
                </View>
                <Seperator text="Or sign up with"></Seperator>
                <View style={{ flexDirection: 'row', height: 50, marginHorizontal: 50, justifyContent: 'space-between'}}>
                    <TouchableOpacity
                        style={styles.buttonAdd}>
                        <Image style={styles.logo} source={require('../../../asets/logoGG.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonAdd}>
                        <Image style={styles.logo} source={require('../../../asets/logoFB.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonAdd}>
                        <Image style={styles.logo} source={require('../../../asets/logoPhone.jpg')} />
                    </TouchableOpacity>

                </View>
                <Text style={styles.footerText}>
                    Already have an account?
                    <Text style={styles.footerLink}> Sign In</Text>
                </Text>

            </View>
        </ImageBackground>
    )
}

export default Register;

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center'

    },
    conatiner: {
        width: '80%',
        height: 'auto',
        
        marginTop: '25%',
        shadowOpacity: 10,
        borderWidth: 1,
        shadowColor: 'red',
        shadowOffset: 10,
        shadowRadius: 10,
        shadowColor: 'red', // Màu của độ bóng
        shadowOffset: { width: 10, height: 10 }, // Điều chỉnh vị trí của độ bóng
        shadowOpacity: 0.5, // Độ trong suốt của độ bóng
        shadowRadius: 10, // Bán kính của độ bóng
        elevation: 200, // Độ cao của độ bóng trên cá
        borderRadius: 10

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
    buttonAdd: {

        borderRadius: 25,
        width: 50
    },
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 25,

    },
    footerText: {
        color: 'black',
        marginBottom: 100,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        height: 'auto',
        paddingRight: 40,
        paddingLeft: 20,
        margin: 20,
        marginVertical: 8,
        borderRadius: 10
      }

})