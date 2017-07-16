import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigatorActions from '../actions/NavigatorActions';

export default class CameraView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontCamera: false,
        }
        this.capture = this.capture.bind(this);
    }

    capture() {
        console.log("capture called");
        const options = {
            target: Camera.constants.CaptureTarget.temp,
            jpegQuality: 80
        };
        this.camera.capture({metadata: options})
        .then((data) => NavigatorActions.ProcessImage(data))
        .catch(err => console.error(err));
    }

    render() {
        return(
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    type={this.state.frontCamera ? "front" : "back"}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.stretch}
                    captureQuality={Camera.constants.CaptureQuality["1080p"]}
                    playSoundOnCapture={false}
                    mirrorImage={this.state.frontCamera ? true : false}
                >
                    <View style={{flexDirection: 'row', width: '100%', flex: 1, alignItems: 'flex-end'}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => this.setState({frontCamera: !this.state.frontCamera})}
                            >
                                <View style={[styles.button, {alignSelf: 'flex-start'}]}>
                                    <Icon name="exchange" size={24} color="rgba(255,255,255,0.8)" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={this.capture}
                            >
                                <View style={[styles.button, {alignSelf: 'center'}]}>
                                    <Icon name="camera" size={24} color="rgba(255,255,255,0.8)" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}></View>
                    </View>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    preview: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgba(0,0,0,.4)',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,.8)',
        width: 50,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        margin: 20,
    },
    buttonText: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 20,
    }
});