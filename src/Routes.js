import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./main/screens/home";
import SignInScreen from "./auth/screens/signIn";
import CreateScreen from "./auth/screens/create";

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
            <Stack.Screen name="Create" component={CreateScreen} />
          </>
        )}
      </Stack.Navigator>
  );
}

export default Routes;