
import { default as LoginScreen } from 'screens/auth/LoginScreen';
import { default as HomeScreen } from 'screens/HomeScreen';
import { default as ChatScreen } from 'screens/ChatScreen';
import { default as ProfileScreen } from 'screens/ProfileScreen';
import {
  createStackNavigator
} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
      },
      headerTitle: "Simple ToDo App",
      headerTitleStyle: {
        fontSize: 20
      },
    }
  }
);

export default AppNavigator;