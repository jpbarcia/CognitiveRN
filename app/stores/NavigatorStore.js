"use strict";

import { ReduceStore } from 'flux/utils';
import Dispatcher from '../Dispatcher';
import { ActionTypes } from '../Constants';
import AppNavigator from '../Navigator';


class NavigatorStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return AppNavigator.router.getStateForAction({type: undefined}, undefined);
    }

    reduce(state, action) {
        const newState = AppNavigator.router.getStateForAction(action, state);
        return (newState ? newState : state)
    }
}

export default new NavigatorStore();
