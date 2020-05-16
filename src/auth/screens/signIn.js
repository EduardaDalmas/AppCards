import * as React from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import Imag from '../../../assets/check.png';

function SignIn({ navigation }) {
    const [email, setEmail] = React.useState('Email');
    const [senha, setSenha] = React.useState('Senha');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#ffffcc" }}>
        <Image 
          source={Imag} 
          style={{ height: 200, width: 200, resizeMode: "contain" }}
        /> 
        <View style={{ width: "100%", height: 100 ,justifyContent: 'space-between', alignItems: "center"}}>
          <TextInput
              style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, margin: 10}}
              onChangeText={text => setEmail(text)}
              value={email}
          />
          <TextInput secureTextEntry
              style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10 }}
              onChangeText={text => setSenha(text)}
              value={senha}
          />
       </View>
        <Button title="Entrar" style={{borderRadius: 8, background: "#ff0000"}} onPress={() => navigation.navigate("Home")}/>
      </View>
    );
  }

  export default SignIn;