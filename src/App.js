import {registerRootComponent} from 'expo';
import { LogBox } from 'react-native';
import Home from './screens/Home';

LogBox.ignoreLogs(['Remote debugger']);

registerRootComponent(Home);
