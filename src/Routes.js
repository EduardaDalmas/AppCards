import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./main/screens/home";
import SignInScreen from "./auth/screens/signIn";
import SignUpScreen from "./auth/screens/signUp";

const Stack = createStackNavigator();

const Routes = () => {
    const [ isSignedIn, setIsSignedIn ] = React.useState(false);

  return (
      <Stack.Navigator>
        {isSignedIn ? ( 
          <> 
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
  );
}

export default Routes;