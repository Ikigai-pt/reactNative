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
