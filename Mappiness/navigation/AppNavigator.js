
import { default as LoginScreen } from 'screens/auth/LoginScreen';
import { default as HomeScreen } from 'screens/HomeScreen';

import {
  createStackNavigator
} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
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