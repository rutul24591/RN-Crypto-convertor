import {registerRootComponent} from 'expo';
import { LogBox } from 'react-native';
// import Home from './screens/Home';
import Navigation from './config/Navigation';

LogBox.ignoreLogs(['Remote debugger']);

registerRootComponent(Navigation);
