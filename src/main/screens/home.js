import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import Imag from '../../../assets/check.png';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#ffffcc" }}>
        <Image 
          source={Imag} 
          style={{ height: 200, width: 200, resizeMode: "contain" }}
        /> 
        <Text style={{ alignItems: "center", fontSize: 20, fontWeight: "bold" }}>Home</Text>
        <View style={{ width: "100%", height: 100 ,justifyContent: 'space-between', alignItems: "center"}}>
        <Button title="Create Cards"  style={{borderRadius: 8}} onPress={() => navigation.navigate("Create")}/>
        <Button title="Edit Cards"  style={{borderRadius: 8}} onPress={() => navigation.navigate("Edit")}/>
        </View>
      </View>
    );
  }

  export default Home;