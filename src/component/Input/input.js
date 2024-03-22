import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePass] = useState(true);

  return (
    <View>
      <TextInput
        style={style.input}
        placeholder='UserName'
        value={userName}
        onChangeText={setUserName} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder='Password'
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={setPassword}
          style={style.input}
        />
        <TouchableOpacity onPress={() => setHidePass(!hidePassword)} style={{ right: 42, backgroundColor: '#89C6D9', width: 'auto', height: 47, justifyContent: 'center', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
          <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
const style = StyleSheet.create({
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