import {Button, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { UserType } from "./Main";
import { FC, memo, useState } from "react";

type BodyType ={
    onUpdateInfor: (user: UserType) => void;
    onClickChangeBgFooter: () => void;
}
export const Body :FC<BodyType> = memo(props =>{
    const {onUpdateInfor, onClickChangeBgFooter} = props;
    const [name, setName] = useState('');
    const [linkImage,setLinkImage] =useState('');
    const handleChangeInfo = () =>{
        if(name.length> 0 && linkImage.length>0){
            onUpdateInfor({name,avtar:linkImage});
        }else{
            ToastAndroid.show('Khong duoc de trong',ToastAndroid.SHORT);
        }
    }
    return (
        <View>
           <TextInput style={style.input} placeholder="input name?"/>
           <TextInput style={style.input} placeholder="input link image?"/>
           <Button title="Update Infor" onPress={onUpdateInfor}/>

           <Button title="Change Color Footer" onPress={onClickChangeBgFooter}/>
        </View>
    )
})
const style = StyleSheet.create({
input:{
    height:40,
    width:370,
    marginBottom:10,
    borderWidth:1,
    padding:10,
    alignItems:'center',
    justifyContent:'center'
}
})