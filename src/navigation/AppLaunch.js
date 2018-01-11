/**
 * Created by liuyan on 2017/12/22.
 */
import React from 'react';

import {StackNavigator} from 'react-navigation';
import Splash from '../scene/Start/SplashScene';
import Login from '../scene/Start/LoginScene';
import Guide from  '../scene/Start/GuideScene';
import Main from './MainNavigator';
import NearDetail from '../scene/nearby/NearbyDetailScene';

import ChooseType from '../scene/Start/ChooseTypeScene';
import WebScene from "../scene/Public/WebScene";

const AppLaunch = StackNavigator({

        Splash: {screen: Splash},
        Login: {screen: Login},
        Guide: {screen: Guide},
        Main: {screen: Main},
        NearDetail: {screen: NearDetail},
        Choose: {screen: ChooseType},
        Web: {screen: WebScene},
    },
    {
        initialRouteName: 'Main',
        mode: 'card',
        headerMode: 'screen'
    });

export default AppLaunch;

