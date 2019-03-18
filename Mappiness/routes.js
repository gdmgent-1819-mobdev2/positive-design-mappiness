import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    Signup: {
        screen: SignUpScreen,
    },
    Chat: {
        screen: ChatScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
});

export default createAppContainer(AppNavigator);