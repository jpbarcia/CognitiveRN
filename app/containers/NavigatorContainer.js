"use strict";

import React, { Component } from 'react';
import { Container } from 'flux/utils';
import AppNavigator from '../Navigator';
import NavigatorStore from '../stores/NavigatorStore';
import NavigatorView from '../views/NavigatorView';
import NavigatorActions from '../actions/NavigatorActions';

class AppContainer extends Component {

    static getStores() {
        return [NavigatorStore];
    }

    static calculateState(prevState) {
        return {   
            navigator: NavigatorStore.getState(),
            dispatcher: NavigatorStore.getDispatcher(),
            onBack: NavigatorActions.BackScreen
        };
    }

    render() {
        console.log(this.context);
        return (
            <NavigatorView {...this.state} />
        );
    }
}

export default Container.create(AppContainer);
