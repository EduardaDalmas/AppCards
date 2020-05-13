import * as React from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import Imag from './assets/check.png';

function SignIn({ navigation }) {
    const [value, onChangeText] = React.useState('Email');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
        source={Imag} 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      /> 
        <TextInput
            style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        <TextInput secureTextEntry
            style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
       
        <Button title="Entrar" onPress={() => navigation.navigate("Home")}/>
      </View>
    );
  }

  export default SignIn;