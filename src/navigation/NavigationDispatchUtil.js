/**
 * Created by liuyan on 2017/11/7.
 */
import  {NavigationActions}  from 'react-navigation';

const reset = (navigation, routeName,params) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName})]
    });
    navigation.dispatch(resetAction);
};

export default {
    reset
};