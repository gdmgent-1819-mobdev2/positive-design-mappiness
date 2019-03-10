import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Home: {
        screen: HomeScreen,
    },
    Signup: {
        screen: SignUpScreen,
    },
});

export default createAppContainer(AppNavigator);