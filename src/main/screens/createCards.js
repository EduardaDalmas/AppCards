import * as React from 'react';
import { Button, View, Text, TextInput, Image, Alert } from 'react-native';
import Imag from '../../../assets/check.png';
import cardsConnect from '../connect';

function createCards({ navigation, cardCreate, status,cardDelete, handleDelete }) {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    // React.useEffect(() => {
    //   if (status === "CARDS_CREATE_SUCCESS"){
    //     Alert.alert("Card created", [
    //       {
    //         text: "ok", onPress: () => navigation.navigate("Home")
    //       }
    //     ])
    //   }
    // }, [status]); 

    // function handleDelete(cardId) {
    //   Alert.alert("Card deleted", [
    //     {
    //       text: "cancel", onPress: () => false
    //     },
    //     {
    //       text: "ok", onPress: () => cardDelete(cardId)
    //     },
    //   ]);
    // }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "#ffffcc" }}>
          <Image 
            source={Imag} 
            style={{ height: 200, width: 200, resizeMode: "contain" }}
          /> 
          <Text style={{ alignItems: "center", fontSize: 20, fontWeight: "bold" }}>
            Create Cards
          </Text>
          <View style={{ width: "100%", height: 100 ,justifyContent: 'space-between', alignItems: "center"}}>
          <TextInput
                style={{ height: 50, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10}}
                onChangeText={text => setTitle(text)}
                value={title}
                placeholder="Title"
            />
            <TextInput
                style={{ height: 80, borderColor: 'gray', width: '80%', borderWidth: 1, borderRadius: 8, padding: 10, margin: 10}}
                onChangeText={text => setContent(text)}
                value={content}
                placeholder="Content"
            />
         </View>
          <Button title="Create" style={{borderRadius: 8, margin: 10}} onPress={() => navigation.navigate("Home")}/>
        </View>
      );
    }
    
export default cardsConnect(createCards);