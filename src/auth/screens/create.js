import * as React from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import Imag from '../../../assets/check.png';
import accountConnect from '../connect';

function Create({ updateRegister, createAccount, formAccountErro, SignIn }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [confirmePassword, setConfirmePassword] = React.useState('');

  function validateForm() {
    if (name === '' || 
        email === '' || 
        password === '' || 
        confirmePassword ||
        password !== confirmePassword
    ) {
      updateRegister({ formAccountErro: true });
    } else {
      createAccount({ name, email, password });
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#ffffcc" }}>
      <Image 
        source={Imag} 
        style={{ height: 200, width: 200, resizeMode: "contain" }}
      /> 
      <Text style={{ alignItems: "center", fontSize: 20, fontWeight: "bold" }}>
        Registre-se
      </Text>
      <View style={{ width: "100%", height: 100 ,justifyContent: 'space-between', alignItems: "center"}}>
      <TextInput
            style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10}}
            onChangeText={text => setName(text)}
            value={name}
            placeholder="Name"
        />
        <TextInput
            style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, margin: 10}}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email"
        />
        <TextInput secureTextEntry
            style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10 }}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
        />
        <TextInput secureTextEntry
            style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, margin: 10}}
            onChangeText={text => setConfirmePassword(text)}
            value={confirmePassword}
            placeholder="ConfirmePassword"
        />
     </View>
     {formAccountErro === true ? (
         <View>
           <Text>
             Revise campos
           </Text>
         </View>
       ) : undefined}
      <Button title="Entrar" style={{borderRadius: 8, margin: 10}} onPress={validateForm}/>
    </View>
  );
}


  
  export default accountConnect(Create);