import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {HorizontalPicker, PianoKeyboard, MidiPlayer} from 'trstlr-components';

const App = () => {
  const [pressedKeys, setPressedKeys] = useState({});

  useEffect(() => console.log(pressedKeys), [pressedKeys]);

  const loadMidi = async () => {
    await MidiPlayer.load(Platform.OS === 'ios' ? '/Piano.sf2' : 'piano.sf2');
    const midis = [60, 65, 70];
    MidiPlayer.unmute();

    MidiPlayer.playMidiNotes(midis);

    setTimeout(() => {
      MidiPlayer.stopMidiNotes(midis);
    }, 1000);
  };

  useEffect(() => {
    loadMidi();
  }, []);

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
