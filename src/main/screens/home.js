import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home </Text>
        <Button title="Go to signIn" onPress={() => navigation.navigate("Login")}/>
      </View>
    );
  }

  export default Home;