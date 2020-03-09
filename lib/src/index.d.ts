import {PickerViewProps} from './components/nativePicker/NativePicker.interface';
import React from 'react';
import {PianoKeyboardProps} from './components/pianoKeyboard/types';

declare module 'trstlr-components';

export const HorizontalPicker: React.FC<PickerViewProps>;
export const PianoKeyboard: React.FC<PianoKeyboardProps>;
