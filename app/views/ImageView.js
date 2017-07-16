import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'react-native-fetch-blob';
import NavigatorActions from '../actions/NavigatorActions';

export default class ImageView extends Component {
    constructor(props) {
        super(props);
        this.source = props.navigation.state.params.path;
        this.state = {
            bounds: [
                {
                    score: '',
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0,
                }
            ]
        };
        this.renderBounds = this.renderBounds.bind(this);
    }

    componentDidMount() {
        RNFetchBlob.fetch('POST', 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
            'Content-Type' : 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': 'AZURE-COGNITIVE-SERVICES-KEY'
        }, RNFetchBlob.wrap(this.source))
        .then((res) => {
            res.data = JSON.parse(res.data);
            console.log(res);
            Image.getSize(this.source, (width, height) => {
                console.log("GottenImage...");
                const densityWidth = width * 1.0 / Dimensions.get('window').width;
                const densityHeight = height * 1.0 / Dimensions.get('window').height;
                let bounds = [];
                res.data.forEach(function(ele) {
                    let bound = {
                        width: ele.faceRectangle.width / densityWidth,
                        height: ele.faceRectangle.height / densityHeight,
                        top: ele.faceRectangle.top / densityHeight,
                        left: ele.faceRectangle.left / densityWidth,
                        score: '',
                    };
                    let maxi = -1;
                    for(let key in ele.scores) {
                        if(ele.scores[key] > maxi) {
                            maxi = ele.scores[key];
                            bound.score = key;
                        }
                    }
                    console.log(bound);
                    bounds.push(bound);
                }, this);
                console.log("Final result");
                console.log(bounds);
                this.setState({bounds});
            }, err => console.warn(err))
        })
        .catch((err) => {
            // error handling ..
            console.warn(err);
        })
    }

    renderBounds() {
        const bounds = this.state.bounds;
        return bounds.map(function(ele) {
            return (
                <View key={"" + ele.top + ", " + ele.left}
                    style={{
                        position: 'absolute',
                        width: ele.width,
                        height: ele.height,
                        top: ele.top,
                        left: ele.left,
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderWidth: 3,
                        borderColor: '#456EDD',
                        zIndex: 10,
                    }}
                >
                    <Text
                        style={{
                            flex: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            backgroundColor: '#456EDD',
                            fontSize: 16
                        }}
                    >{ele.score}</Text>
                </View>);
        }, this);
    }

    render() {
        const renderedBounds = this.renderBounds();
        console.log("Rendered Bounds....");
        console.log(renderedBounds);
        return(
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: this.source }}
                >
                {
                    renderedBounds
                }
                </Image>
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
    image: {
        flex: 1,
        width: '100%'
    }
});
