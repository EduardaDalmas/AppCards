import * as React from 'react';
import { Button, View, Text } from 'react-native';

function SignUp({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignUp </Text>
        <Button title='Go to Home' onPress={() => navigation.navigate("SignIn")} />
      </View>
    );
  }
  
  export default SignUp;