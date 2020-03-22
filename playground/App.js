import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {HorizontalPicker, PianoKeyboard} from 'trstlr-components';

const App = () => {
  const [pressedKeys, setPressedKeys] = useState({});

  useEffect(() => console.log(pressedKeys), [pressedKeys]);

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
          startingPosition={21}
          containerStyle={styles.container}
          pressedKeys={pressedKeys}
          onKeysUpdate={snapshot => {
            setPressedKeys(snapshot);
          }}
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
