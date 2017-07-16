import { StackNavigator } from 'react-navigation';

import SplashView from './views/SplashView';
import HomeView from './views/HomeView';
import CameraView from './views/CameraView';
import ImageView from './views/ImageView';

export default StackNavigator({
    Splash: { screen: SplashView },
    Home: { screen: HomeView },
    Camera: { screen: CameraView },
    Image: { screen: ImageView }
}, {
    initial: 'Splash',
    headerMode: 'none'
});