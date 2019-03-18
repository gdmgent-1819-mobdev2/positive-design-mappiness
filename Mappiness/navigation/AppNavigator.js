
import { default as LoginScreen } from 'screens/auth/LoginScreen';
import { default as HomeScreen } from 'screens/HomeScreen';
import { default as ChatScreen } from 'screens/ChatScreen';
import { default as ProfileScreen } from 'screens/ProfileScreen';
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
    Chat: ChatScreen,
    Profile: ProfileScreen
    ProfileEdit: ProfileEdit
  }
);

export default AppNavigator;