import React from 'react';
import { 
    BackHandler,
    StatusBar,
    View,
    StyleSheet
} from 'react-native';
import AppNavigator from '../Navigator';
import { addNavigationHelpers } from 'react-navigation';

const propTypes = {
    dispatcher: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired,
    onBack: React.PropTypes.func.isRequired
}

const barStyleRouteName = function(routeName) {
    switch(routeName) {
        case 'Splash':
            return 'dark-content';
        case 'Home':
            return 'light-content';
        case 'Camera':
            return 'light-content';
    }
}

export default class NavigatorView extends React.Component {
    constructor(props) {
        super(props);
        this.backAndroidEvent = this.backAndroidEvent.bind(this);
        BackHandler.addEventListener('hardwareBackPress', this.backAndroidEvent);
    }

    backAndroidEvent() {
        switch(this.props.navigator.index) {
            case 0:
                return false;
            default:
                this.props.onBack();
                return true;
        }
    }

    render() {
        const route = this.props.navigator.routes[this.props.navigator.index];
        const barStyle = barStyleRouteName(route.routeName);
        return (
            <View style={styles.container}>
                <StatusBar 
                    hidden={false}
                    backgroundColor="rgba(0,0,0,0)"
                    barStyle={barStyle}
                    translucent={true}
                />
                <AppNavigator
                    navigation={addNavigationHelpers({
                        dispatch: this.props.dispatcher.dispatch,
                        state: this.props.navigator,
                    })}
                />
            </View>
        );
    }

    static propTypes = propTypes
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
});