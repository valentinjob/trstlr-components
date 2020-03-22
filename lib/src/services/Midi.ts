import {NativeModules} from 'react-native';
import RNFS from 'react-native-fs';

const MidiNative = NativeModules.MidiPlayer;

/**
 * Midi service for operations with midi.
 *
 * Note: before use add a soundfont(.sf2) to
 * ios: Resources build step
 * android: tbd
 */

// todo: 22.03.2020 add android implementation, test on a device
const Midi = {
  /**
   * Loads midi soundfont
   * @param path
   */
  async load(path: string) {
    const pathNew = `${RNFS.MainBundlePath}${path}`;

    const result = await MidiNative.load(pathNew);
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
    MidiNative.unmute();
  },
};

export default Midi;
