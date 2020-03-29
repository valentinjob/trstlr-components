import {NativeModules, Platform} from 'react-native';
import RNFS from 'react-native-fs';

const MidiNative = NativeModules.MidiPlayer;

/**
 * Midi service for operations with midi.
 *
 * Note: before use add a soundfont(.sf2) to
 * ios: Resources build step
 * android: assets folder
 */

const Midi = {
  /**
   * Loads midi soundfont
   * @param path
   */
  async load(path: string) {
    const pathNew = `${
      Platform.OS === 'ios' ? RNFS.MainBundlePath : ''
    }${path}`;

    await MidiNative.load(pathNew);
  },

  playMidiNote(midi: number) {
    MidiNative.playMidiNote(midi);
  },

  playMidiNotes(midis: number[]) {
    MidiNative.playMidiNotes(midis);
  },

  stopMidiNote(midi: number) {
    MidiNative.stopMidiNote(midi);
  },

  stopMidiNotes(midis: number[]) {
    MidiNative.stopMidiNotes(midis);
  },

  unmute() {
    if (Platform.OS === 'ios') {
      MidiNative.unmute();
    }
  },
};

export default Midi;
