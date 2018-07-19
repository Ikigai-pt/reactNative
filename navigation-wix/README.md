# Enable react-native-debugger

- By default Expo debugger uses port 19001
- add debug scrip to launch rnd on port 19001
  - "debug": "open 'rndebugger://set-debugger-loc?host=localhost&port=19001'"

- Eject RN project into android/ios
  - npm run eject

### Install React-Native-Vector Icons
- Android
  - Edit android/app/build.gradle

    ```
    project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ]
    ]
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
    ```
  - Edit android/settings.gradle

    ```
    rootProject.name = 'MyApp'
    include ':app'

    + include ':react-native-vector-icons'
    + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
    ```

  - Edit android/app/build.gradle
    
    ```
    apply plugin: 'com.android.application'

    android {
      ...
    }

    dependencies {
      compile fileTree(dir: 'libs', include: ['*.jar'])
      compile "com.android.support:appcompat-v7:23.0.1"
      compile "com.facebook.react:react-native:+"  // From node_modules
    + compile project(':react-native-vector-icons')
    }
  ```

  - Edit your MainApplication.java

  ```
      package com.myapp;

    + import com.oblador.vectoricons.VectorIconsPackage;

    ....

      @Override
      protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
          new MainReactPackage()
    +   , new VectorIconsPackage()
        );
      }

    }
```

#### Adding custom fonts
- Add the new font to assets/fonts
- Add rnpm scipt to Package.json
```
"rnpm": {
    "assets": [
	"./assets/fonts/"
    ]
},
```

- Run react-native link
  Reference https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e


#### RN Animation
- https://animationbook.codedaily.io/introduction/
- https://codedaily.io/screencasts
- https://codeburst.io/react-native-nine-animation-screencast-tutorials-9d031e8bb86f


### Implement Theme
- https://reactjs.org/docs/context.html
- https://www.terrydiederich.com/changing-style-as-state-changes-in-react-native/
- https://blog.producthunt.com/product-hunt-mobile-theme-with-redux-in-react-native-part-ii-49b9448040ce
- https://blog.benestudio.co/themes-in-react-native-16b4b0a33ed
- https://blog.callstack.io/react-theme-provider-the-easiest-way-to-use-multiple-themes-in-your-app-cf126734e01c

### Examples 
- https://reactnativeexample.com/

### Blog
- https://www.appticles.com/blog/2018/05/building-ios-and-android-apps-with-react-native/
