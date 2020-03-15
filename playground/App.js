import React, {useState} from 'react';
import {pipe, filter, reduce} from 'lodash/fp';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {HorizontalPicker, PianoKeyboard} from 'trstlr-components';

const App = () => {
  const [pressedKeys, setPressedKeys] = useState([]);

  const toPressedKeys = () => {
    return pipe(
      filter(it => it.active),
      reduce((acc, it) => {
        acc[it.name] = 'any';
        return acc;
      }, {}),
    )(pressedKeys);
  };

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
          startingPosition={20}
          containerStyle={styles.container}
          pressedKeys={toPressedKeys(pressedKeys)}
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
