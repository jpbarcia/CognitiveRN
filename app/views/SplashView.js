import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import NavigatorActions from '../actions/NavigatorActions';

export default class SplashView extends Component {
    constructor(props) {
        super(props);
        this.selectOnPress = this.selectOnPress.bind(this);
    }

    selectOnPress() {
        NavigatorActions.ShowHome();
    }

    render() {
        return(
            <LinearGradient 
                colors={['#FFE5AC', '#B51E59']} 
                start={{x: 1.0, y: 0.0}} 
                end={{x: 0.0, y: 1.0}}
                style={styles.container}
            >
                <Text style={styles.title}>React Native</Text>
                <Text style={styles.title}>Playground</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.selectOnPress}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>LET'S GO!</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.signature}>Jean Pierre Barcia</Text>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: '500',
        textShadowColor: 'rgba(0,0,0, .2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        backgroundColor: 'transparent',
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 85,
        paddingRight: 85,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '100',
        color: 'white',
        backgroundColor: 'transparent',
    },
    signature: {
        fontSize: 14,
        fontWeight: '100',
        color: 'rgba(255,255,255,0.8)',
        position: 'absolute',
        bottom: 35,

    }
});