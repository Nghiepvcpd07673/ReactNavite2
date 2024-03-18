import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'


export type UserType = {
  name: string;
  avatar: string;
}
const colors = ['white', 'red', 'yellow', 'blue', 'orange', 'gray']

export default function Main() {
  const [user, setUser] = useState<UserType>({
    name: 'NO NAME',
    avatar: 'https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?t=st=1710757467~exp=1710761067~hmac=9b6b341cc510d17838bcfe38e6a3648586045379304cedfc8f4bcfb83783ae65&w=740'
  })
  const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin')
  const [footerColor, setFooterColor] = useState(colors[0])
  //ham random mau
  const handleRandomColor = useCallback(() => {
    const numberRandom = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRandom])
  }, [])

  useEffect(() => {
    const currentData = new Date();
    const datetime = currentData.getDate() + '/' +
      (currentData.getMonth() + 1) + '/' +
      currentData.getFullYear() + ' ' +
      currentData.getHours() + ':' +
      currentData.getMinutes() + ':' +
      currentData.getSeconds()
    setLastTimeUpdate(datetime)
    console.log(datetime);
  }, [user])
  //cap nhat thong tin tai khoan
  const handleUpdateInfor = useCallback((_user: UserType) => {
    setUser(_user)
  }, [])

  return (

    <ImageBackground source={require ('../../asets/background.jpg')} style={{width:'100%',height:'100%'}}>
      <View>
       <Text style={styles.textStyle}>REACT NATIVE HOOKS</Text>
        <Header user={user} />
        <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor} />
        <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({

  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F4980A',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})