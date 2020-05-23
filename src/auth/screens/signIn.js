import * as React from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';
import Imag from '../../../assets/check.png';
import accountConnect from '../../auth/connect';

function SignIn({ navigation, credentials, updateCredentials, credentialsErro, signIn, updateRegister }) {

    const { email, password } = credentials;

    function validaCredentials() {
      if (email === '' || password === '') {
        updateRegister({ credentialsErro: true});
      } else {
        signIn();
      }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#ffffcc" }}>
        <Image 
          source={Imag} 
          style={{ height: 200, width: 200, resizeMode: "contain" }}
        /> 
        <Text style={{ alignItems: "center", fontSize: 20, fontWeight: "bold" }}>
          Login
        </Text>
        <View style={{ width: "100%", height: 100 ,justifyContent: 'space-between', alignItems: "center"}}>
          <TextInput
              style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, margin: 10}}
              onChangeText={(email) => updateCredentials({
                ...credentials,
                email,
              })}
              placeholder="Email"
              value={email}
          />
          <TextInput secureTextEntry
              style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10,}}
              onChangeText={(password) => updateCredentials({
                ...credentials,
                password,
              })}
              placeholder="password"
              value={password}
          />
       </View>
       {credentialsErro === true ? (
         <View>
           <Text>
             Credentials invalidas
           </Text>
         </View>
       ) : undefined}
       <Button  title="Entrar" style={{borderRadius: 8}} onPress={validaCredentials}/>
        <Button title="Cadastre-se" style={{borderRadius: 8}} onPress={() => navigation.navigate("Create")}/>
      </View>
    );
  }

  
  export default accountConnect(SignIn);