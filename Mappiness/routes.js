import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import SliderScreen from './screens/SliderScreen';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Signup: {
        screen: SignUpScreen,
    },
    Home: {
        screen: HomeScreen,
    },
    Chat: {
        screen: ChatScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
    ProfileEdit: {
        screen: ProfileEditScreen,
    },
    Slider: {
        screen: SliderScreen,
    },
});

export default createAppContainer(AppNavigator);