import React, { Component } from 'react';
import {
    BackHandler,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import NavigatorActions from '../actions/NavigatorActions';

export default class HomeView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <LinearGradient 
                colors={['#AA4296', '#456EDD']} 
                start={{x: 1.0, y: 0.0}} 
                end={{x: 0.0, y: 1.0}}
                style={styles.container}
            >
                <View style={styles.section}>
                    <Text style={[styles.title, {textAlign: 'left'}]}>FACE API</Text>
                    <View style={{alignItems: 'flex-end'}}>
                        <Button onPress={NavigatorActions.ShowCamera}>TAKE A PHOTO</Button>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={[styles.title, {textAlign: 'right'}]}>EMOTION API</Text>
                    <View style={{alignItems: 'flex-start'}}>
                        <Button>TAKE A PHOTO</Button>
                    </View>
                </View>

                <View style={[styles.section, {borderBottomWidth: 0}]}>
                    <Text style={[styles.title, {textAlign: 'center'}]}>VIDEO EMOTION API</Text>
                    <View style={{alignItems: 'center'}}>
                        <Button style={{width: 260}}>KEEP SMILING</Button>
                    </View>
                </View>
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
    section: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255, .4)'
    },
    title: {
        //fontFamily: 'roboto',
        //marginTop: 10,
        marginBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 26,
        color: 'white',
        backgroundColor: 'transparent',
        fontWeight: '400',
        textShadowColor: 'rgba(0,0,0, .2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4
    }
});


function Button(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
        >
            <View style={[buttonStyles.button, props.style]}>
                <Text style={[buttonStyles.text, props.textStyle]}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const buttonStyles = StyleSheet.create({
    button: {
        //marginTop: 20,
        //marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        width: 220,
        //paddingLeft: 85,
        //paddingRight: 85,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,.9)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '100',
        color: 'rgba(255,255,255,.9)',
        backgroundColor: 'transparent',
    },
});