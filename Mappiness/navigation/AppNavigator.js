
import { default as LoginScreen } from 'screens/auth/LoginScreen';
import { default as HomeScreen } from 'screens/HomeScreen';
import { default as ChatScreen } from 'screens/ChatScreen';
import { default as ProfileScreen } from 'screens/ProfileScreen';
import { default as SliderScreen } from 'screens/SliderScreen';
import {
  StackNavigator
} from 'react-navigation';



const AppNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      NavigationOptions: {
        title: 'Home',
        header: null //this will hide the header
      },
  },
    Login: LoginScreen,
    Slider: SliderScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen
    ProfileEdit: ProfileEdit
  }
);

export default AppNavigator;