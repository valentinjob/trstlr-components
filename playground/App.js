import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {HorizontalPicker, PianoKeyboard} from 'trstlr-components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <HorizontalPicker
          containerStyle={styles.container}
          items={['C', 'D', 'B']}
          onItemChange={it => console.log(it)}
        />
        <PianoKeyboard
          containerStyle={styles.container}
          pressedKeys={{C0: 'thumb', 'C#0': 'index', Ab0: 'little'}}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  horizontalPicker: {
    height: 200,
    width: '100%',
  },
  container: {
    flex: 1,
  },
});

export default App;
