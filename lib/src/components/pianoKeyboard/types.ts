export interface PianoKeyboardProps {
  containerStyle: any;
  pressedKeys: PressedKeys;
  scrollEnabled: boolean;
  startingPosition: number;
  onKeysUpdate: Function;
}

export interface KeyImpactProviderProps {
  pressedKeys: PressedKeys;
  children: Element[];
  onKeyPress: Function;
}

export interface KeyProps {
  name: string;
  pressedBy?: string;
  containerStyle?: any;
  onKeyPress?: Function;
}

export interface OnKeyPressPayload {
  name: string;
  active: boolean;
}

export interface KeysState {
  [key: string]: OnKeyPressPayload;
}

export interface PressedKeys {
  C0?: string;
  'C#0'?: string;
  Db0?: string;
  D0?: string;
  'D#0'?: string;
  Eb0?: string;
  E0?: string;
  F0?: string;
  'F#0'?: string;
  Gb0?: string;
  G0?: string;
  'G#0'?: string;
  Ab0?: string;
  A0?: string;
  'A#0'?: string;
  Bb0?: string;
  B0?: string;

  C1?: string;
  'C#1'?: string;
  Db1?: string;
  D1?: string;
  'D#1'?: string;
  Eb1?: string;
  E1?: string;
  F1?: string;
  'F#1'?: string;
  Gb1?: string;
  G1?: string;
  'G#1'?: string;
  Ab1?: string;
  A1?: string;
  'A#1'?: string;
  Bb1?: string;
  B1?: string;

  C2?: string;
  'C#2'?: string;
  Db2?: string;
  D2?: string;
  'D#2'?: string;
  Eb2?: string;
  E2?: string;
  F2?: string;
  'F#2'?: string;
  Gb2?: string;
  G2?: string;
  'G#2'?: string;
  Ab2?: string;
  A2?: string;
  'A#2'?: string;
  Bb2?: string;
  B2?: string;

  C3?: string;
  'C#3'?: string;
  Db3?: string;
  D3?: string;
  'D#3'?: string;
  Eb3?: string;
  E3?: string;
  F3?: string;
  'F#3'?: string;
  Gb3?: string;
  G3?: string;
  'G#3'?: string;
  Ab3?: string;
  A3?: string;
  'A#3'?: string;
  Bb3?: string;
  B3?: string;

  C4?: string;
  'C#4'?: string;
  Db4?: string;
  D4?: string;
  'D#4'?: string;
  Eb4?: string;
  E4?: string;
  F4?: string;
  'F#4'?: string;
  Gb4?: string;
  G4?: string;
  'G#4'?: string;
  Ab4?: string;
  A4?: string;
  'A#4'?: string;
  Bb4?: string;
  B4?: string;

  C5?: string;
  'C#5'?: string;
  Db5?: string;
  D5?: string;
  'D#5'?: string;
  Eb5?: string;
  E5?: string;
  F5?: string;
  'F#5'?: string;
  Gb5?: string;
  G5?: string;
  'G#5'?: string;
  Ab5?: string;
  A5?: string;
  'A#5'?: string;
  Bb5?: string;
  B5?: string;

  C6?: string;
  'C#6'?: string;
  Db6?: string;
  D6?: string;
  'D#6'?: string;
  Eb6?: string;
  E6?: string;
  F6?: string;
  'F#6'?: string;
  Gb6?: string;
  G6?: string;
  'G#6'?: string;
  Ab6?: string;
  A6?: string;
  'A#6'?: string;
  Bb6?: string;
  B6?: string;

  C7?: string;
  'C#7'?: string;
  Db7?: string;
  D7?: string;
  'D#7'?: string;
  Eb7?: string;
  E7?: string;
  F7?: string;
  'F#7'?: string;
  Gb7?: string;
  G7?: string;
  'G#7'?: string;
  Ab7?: string;
  A7?: string;
  'A#7'?: string;
  Bb7?: string;
  B7?: string;

  C8?: string;
  'C#8'?: string;
  Db8?: string;
  D8?: string;
  'D#8'?: string;
  Eb8?: string;
  E8?: string;
  F8?: string;
  'F#8'?: string;
  Gb8?: string;
  G8?: string;
  'G#8'?: string;
  Ab8?: string;
  A8?: string;
  'A#8'?: string;
  Bb8?: string;
  B8?: string;

  [key: string]: string | undefined;
}
