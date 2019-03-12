import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

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
    Profile:{
        screen: ProfileScreen,
    },
});

export default createAppContainer(AppNavigator);