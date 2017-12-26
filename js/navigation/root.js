/**
 * Created by liuyan on 2017/12/22.
 */
import React from 'react';

import {StackNavigator} from 'react-navigation';
import Splash from '../scene/Splash';
import Login from '../scene/Login';
import Guide from  '../scene/Guide';
import Tab from '../navigation/MainNavigator';

import ChooseType from '../scene/ChooseType';

const AppLaunch = StackNavigator({

        Splash: {screen: Splash},
        Login: {screen: Login},
        Guide: {screen: Guide},
        Tab: {screen: Tab},
        Choose: {screen: ChooseType},
    },
    {
        initialRouteName: 'Splash',
        mode: 'card',
        headerMode: 'screen'
    });

export default AppLaunch;

