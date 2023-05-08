import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

    
        </Stack.Navigator>
    );
}