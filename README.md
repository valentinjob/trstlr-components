### Start developing
1. Install dependencies `npm install`
2. Run the playground project in Android and iOS so that you can get a feel for the project.
    - `npm run start` to get the packager running in a terminal, leave it open
    - **iOS**: `npm run pod-install` & `npm run xcode` & run the project from Xcode
    - **Android**: `npm run install-android`, or open the app in Android Studio and click `Run`

## Folder Structure

| Folder | Description |
| ------ | ----------- |
| `lib` | The project itself composed of: |
| `lib/android` | android sources and unit tests |
| `lib/ios` | iOS sources |
| `lib/src` | TypeScript sources and unit tests |
| `playground` | The end-user project. Contains its own `src`, `android` and `ios`. Does not have its own package.json, depends on the local `<root>/lib` for faster local development (no need to `npm install` locally). |
| `scripts` | all scripts |
