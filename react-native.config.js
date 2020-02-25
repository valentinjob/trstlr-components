module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: {
        sourceDir: './lib/android/app/',
        packageImportPath:
          'import com.horizontalpicker.nativeView.HorizontalPickerPackage;',
      },
    },
    assets: [],
  },
  project: {
    ios: {
      project: './playground/ios/playground.xcworkspace',
    },
    android: {
      sourceDir: './playground/android/',
    },
  },
};
