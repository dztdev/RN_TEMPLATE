import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, Detail } from '../Views'

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Detail: {screen: Detail},
  });

  