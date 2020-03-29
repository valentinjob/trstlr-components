import {PickerViewProps} from './components/nativePicker/NativePicker.interface';
import React from 'react';
import {PianoKeyboardProps} from './components/pianoKeyboard/types';
import {Midi} from './services/Midi';

declare module 'trstlr-components';

export const HorizontalPicker: React.FC<PickerViewProps>;
export const PianoKeyboard: React.FC<PianoKeyboardProps>;

export const MidiPlayer: Midi;
