import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./main/screens/home";
import EditScreen from "./main/screens/editCards";
import CardsScreen from "./main/screens/createCards";
import SignInScreen from "./auth/screens/signIn";
import CreateScreen from "./auth/screens/create";
import accountConnect from "./auth/connect";

const Stack = createStackNavigator();

const Routes = ({ authenticated, initSession}) => {
    
    React.useEffect(() => {
      initSession();
    }, []);

  return (
      <Stack.Navigator>
        {authenticated === true ? ( 
          <> 
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
            <Stack.Screen name="Create" component={CardsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
          </>
        )}
      </Stack.Navigator>
  );
}

export default accountConnect(Routes);