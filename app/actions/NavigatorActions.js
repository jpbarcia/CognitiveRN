import Dispatcher from '../Dispatcher';
import { NavigationActions } from 'react-navigation';

export default {
    BackScreen() {
        Dispatcher.dispatch(NavigationActions.back());
    },

    ShowHome() {
        Dispatcher.dispatch(NavigationActions.navigate({ routeName: 'Home' }));
    },

    ShowCamera() {
        Dispatcher.dispatch(NavigationActions.navigate({ routeName: 'Camera' }));
    },

    ProcessImage(data) {
        Dispatcher.dispatch(NavigationActions.navigate({ 
            routeName: 'Image',
            params: data 
        }));
    }

    
};
