package com.rndemo;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

public class MainActivity extends AppCompatActivity {
    private ReactRootView react_root_view;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_main);

        react_root_view = (ReactRootView) findViewById(R.id.reactRootView);

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.jsbundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        //ReactNativeApp 是项目名，需要和index.adnroid.js中的保持一致
        react_root_view.startReactApplication(mReactInstanceManager, "RnDemo", null);


    }
}
