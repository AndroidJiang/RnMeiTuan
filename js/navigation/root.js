/**
 * Created by liuyan on 2017/12/22.
 */
import React from 'react';

import {StackNavigator} from 'react-navigation';

import Splash from '../scene/Splash';
import Login from '../scene/Login';
import Guide from  '../scene/Guide';

const AppLaunch = StackNavigator({

        Splash: {screen: Splash},
        Login: {screen: Login},
        Guide: {screen: Guide},
    },
    {
        initialRouteName: 'Splash',
        mode: 'card',
        headerMode: 'screen'
    });

export default AppLaunch;

