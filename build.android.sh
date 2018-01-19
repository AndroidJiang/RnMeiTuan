#!/usr/bin/env bash
cd ../RnDemo
rm ./android/app/src/main/assets/index.android.jsbundle
react-native bundle --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.jsbundle --platform android --assets-dest ./android/app/src/main/res/ --dev false
rm ./android/app/src/main/assets/index.android.jsbundle.meta




#https://github.com/facebook/react-native/issues/4831
