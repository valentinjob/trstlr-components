import React, {FC, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';

import {PianoKeyboardProps, KeyImpactProviderProps, KeyProps, OnKeyPressPayload, KeysState} from './types';

const BlackKey: FC<KeyProps> = ({name, pressedBy, containerStyle, onKeyPress}) => {
  const [whiteKey, , octave] = name.split('/')[0].split('');
  const [keyPressed, setKeyPressed] = useState(false);
  const keyStyle = {
    ...containerStyle,
    ...styles.blackKey(parseInt(octave, 10), whiteKey),
  };

  if (pressedBy) {
    keyStyle.backgroundColor = FINGER_COLOR_MAP[pressedBy];
    keyStyle.borderColor = layoutColors.primaryBorderColor;
  }

  return <TouchableOpacity style={keyStyle} activeOpacity={0.8} onPress={() => {
    const updKeyStatus = !keyPressed;
    setKeyPressed(updKeyStatus);
    if (onKeyPress) onKeyPress(updKeyStatus);
  }}/>;
};

const WhiteKey: FC<KeyProps> = ({name, pressedBy, containerStyle, onKeyPress}) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const keyStyle = {...styles.whiteKey};
  // TODO: use name for midi
  if (pressedBy) {
    keyStyle.backgroundColor = FINGER_COLOR_MAP[pressedBy];
  }

  return (
    <TouchableOpacity
      style={{...styles.whiteKeyContainer, ...containerStyle}}
      onPress={() => {
        const updKeyStatus = !keyPressed;
        setKeyPressed(updKeyStatus);
        if (onKeyPress) onKeyPress(updKeyStatus);
      }}
      activeOpacity={0.6}>
      <View style={keyStyle}/>
    </TouchableOpacity>
  );
};

class KeyImpactProvider extends React.Component<KeyImpactProviderProps> {
  _getPressedByName(name: string): string | undefined {
    const names = name.split('/');
    return names.map((it: string) => this.props.pressedKeys[it]).find(Boolean);
  }

  _onKeyPress = (payload: OnKeyPressPayload) => {
    this.props.onKeyPress(payload);
  };

  // todo improve typings
  render() {
    const childrenWithPressedBy = React.Children.map<React.ReactNode, React.ReactElement>(
      // @ts-ignore
      this.props.children,
      (child: React.ReactElement<KeyProps>) =>
        React.cloneElement<KeyProps>(child, {
          pressedBy: this._getPressedByName(child.props.name),
          onKeyPress: (state: boolean) => this._onKeyPress({
            name: child.props.name,
            active: state,
          }),
        }),
    );

    return <>{childrenWithPressedBy}</>;
  }
}

const PianoKeyboard: FC<PianoKeyboardProps> = ({
                                                 containerStyle,
                                                 pressedKeys = {},
                                                 scrollEnabled = true,
                                                 startingPosition,
                                                 onKeysUpdate,
                                               }) => {
  const scrollRef = useRef<ScrollView>(null);
  const [keysState, setKeysState] = useState<KeysState>({});

  useEffect(() => {
    if (startingPosition !== undefined) {
      scrollToPosition();
    }
  }, [startingPosition]);

  const scrollToPosition = () => {
    scrollRef.current?.scrollTo(0, (layoutProps.keyWidth * startingPosition) + layoutProps.margin, false);
  };

  const updateKeyStates = (payload: OnKeyPressPayload) => {
    const update = {
      ...keysState, [payload.name]: {
        active: payload.active,
        name: payload.name,
      },
    };
    setKeysState(update);
    onKeysUpdate(update);
  };

  return (
    <ScrollView ref={scrollRef} onLayout={scrollToPosition} horizontal={true} scrollEnabled={scrollEnabled}>
      <View style={{...styles.container, ...containerStyle}}>
        <KeyImpactProvider pressedKeys={pressedKeys} onKeyPress={updateKeyStates}>
          <WhiteKey name={'C0'}/>
          <BlackKey name={'C#0/Db0'}/>
          <WhiteKey name={'D0'}/>
          <BlackKey name={'D#0/Eb0'}/>
          <WhiteKey name={'E0'}/>
          <WhiteKey name={'F0'}/>
          <BlackKey name={'F#0/Gb0'}/>
          <WhiteKey name={'G0'}/>
          <BlackKey name={'G#0/Ab0'}/>
          <WhiteKey name={'A0'}/>
          <BlackKey name={'A#0/Bb0'}/>
          <WhiteKey name={'B0'}/>

          <WhiteKey name={'C1'}/>
          <BlackKey name={'C#1/Db1'}/>
          <WhiteKey name={'D1'}/>
          <BlackKey name={'D#1/Eb1'}/>
          <WhiteKey name={'E1'}/>
          <WhiteKey name={'F1'}/>
          <BlackKey name={'F#1/Gb1'}/>
          <WhiteKey name={'G1'}/>
          <BlackKey name={'G#1/Ab1'}/>
          <WhiteKey name={'A1'}/>
          <BlackKey name={'A#1/Bb1'}/>
          <WhiteKey name={'B1'}/>

          <WhiteKey name={'C2'}/>
          <BlackKey name={'C#2/Db2'}/>
          <WhiteKey name={'D2'}/>
          <BlackKey name={'D#2/Eb2'}/>
          <WhiteKey name={'E2'}/>
          <WhiteKey name={'F2'}/>
          <BlackKey name={'F#2/Gb2'}/>
          <WhiteKey name={'G2'}/>
          <BlackKey name={'G#2/Ab2'}/>
          <WhiteKey name={'A2'}/>
          <BlackKey name={'A#2/Bb2'}/>
          <WhiteKey name={'B2'}/>

          <WhiteKey name={'C3'}/>
          <BlackKey name={'C#3/Db3'}/>
          <WhiteKey name={'D3'}/>
          <BlackKey name={'D#3/Eb3'}/>
          <WhiteKey name={'E3'}/>
          <WhiteKey name={'F3'}/>
          <BlackKey name={'F#3/Gb3'}/>
          <WhiteKey name={'G3'}/>
          <BlackKey name={'G#3/Ab3'}/>
          <WhiteKey name={'A3'}/>
          <BlackKey name={'A#3/Bb3'}/>
          <WhiteKey name={'B3'}/>

          <WhiteKey name={'C4'}/>
          <BlackKey name={'C#4/Db4'}/>
          <WhiteKey name={'D4'}/>
          <BlackKey name={'D#4/Eb4'}/>
          <WhiteKey name={'E4'}/>
          <WhiteKey name={'F4'}/>
          <BlackKey name={'F#4/Gb4'}/>
          <WhiteKey name={'G4'}/>
          <BlackKey name={'G#4/Ab4'}/>
          <WhiteKey name={'A4'}/>
          <BlackKey name={'A#4/Bb4'}/>
          <WhiteKey name={'B4'}/>

          <WhiteKey name={'C5'}/>
          <BlackKey name={'C#5/Db5'}/>
          <WhiteKey name={'D5'}/>
          <BlackKey name={'D#5/Eb5'}/>
          <WhiteKey name={'E5'}/>
          <WhiteKey name={'F5'}/>
          <BlackKey name={'F#5/Gb5'}/>
          <WhiteKey name={'G5'}/>
          <BlackKey name={'G#5/Ab5'}/>
          <WhiteKey name={'A5'}/>
          <BlackKey name={'A#5/Bb5'}/>
          <WhiteKey name={'B5'}/>

          <WhiteKey name={'C6'}/>
          <BlackKey name={'C#6/Db6'}/>
          <WhiteKey name={'D6'}/>
          <BlackKey name={'D#6/Eb6'}/>
          <WhiteKey name={'E6'}/>
          <WhiteKey name={'F6'}/>
          <BlackKey name={'F#6/Gb6'}/>
          <WhiteKey name={'G6'}/>
          <BlackKey name={'G#6/Ab6'}/>
          <WhiteKey name={'A6'}/>
          <BlackKey name={'A#6/Bb6'}/>
          <WhiteKey name={'B6'}/>

          <WhiteKey name={'C7'}/>
          <BlackKey name={'C#7/Db7'}/>
          <WhiteKey name={'D7'}/>
          <BlackKey name={'D#7/Eb7'}/>
          <WhiteKey name={'E7'}/>
          <WhiteKey name={'F7'}/>
          <BlackKey name={'F#7/Gb7'}/>
          <WhiteKey name={'G7'}/>
          <BlackKey name={'G#7/Ab7'}/>
          <WhiteKey name={'A7'}/>
          <BlackKey name={'A#7/Bb7'}/>
          <WhiteKey name={'B7'}/>

          <WhiteKey name={'C8'}/>
          <BlackKey name={'C#8/Db8'}/>
          <WhiteKey name={'D8'}/>
          <BlackKey name={'D#8/Eb8'}/>
          <WhiteKey name={'E8'}/>
          <WhiteKey name={'F8'}/>
          <BlackKey name={'F#8/Gb8'}/>
          <WhiteKey name={'G8'}/>
          <BlackKey name={'G#8/Ab8'}/>
          <WhiteKey name={'A8'}/>
          <BlackKey name={'A#8/Bb8'}/>
          <WhiteKey name={'B8'}/>
        </KeyImpactProvider>
      </View>
    </ScrollView>
  );
};

const layoutProps = {
  margin: 16,
  height: 234,
  keyWidth: 24,
};

const layoutColors = {
  primaryBorderColor: '#C3C3C3',
  secondaryBorderColor: '#eeeeee',
  accentColor: '#a41e2f',

  thumbFingerColor: '#FFFB9A',
  indexFingerColor: '#BDDDFF',
  middleFingerColor: '#B0FAEA',
  ringFingerColor: '#8f9dfa',
  littleFingerColor: '#fa9cf1',
  anyFingerColor: '#eaeaea',
};

const FINGER_COLOR_MAP: {[key: string]: string} = {
  thumb: layoutColors.thumbFingerColor,
  index: layoutColors.indexFingerColor,
  middle: layoutColors.middleFingerColor,
  ring: layoutColors.ringFingerColor,
  little: layoutColors.littleFingerColor,
  any: layoutColors.anyFingerColor,
};

const KEY_IDX_MAP: {[key: string]: number} = {
  C: 1,
  D: 2,
  E: 3,
  F: 4,
  G: 5,
  A: 6,
  B: 7,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: layoutProps.margin,
    marginRight: layoutProps.margin,
    position: 'relative',
    borderTopColor: layoutColors.accentColor,
    borderTopWidth: 2,
  },
  whiteKeyContainer: {
    overflow: 'hidden',
  },
  whiteKey: {
    width: layoutProps.keyWidth,
    borderLeftColor: layoutColors.primaryBorderColor,
    borderTopColor: layoutColors.primaryBorderColor,
    borderBottomColor: layoutColors.primaryBorderColor,
    borderRightColor: layoutColors.secondaryBorderColor,
    borderWidth: 1,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    height: layoutProps.height,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {height: 2, width: 1},
  },
  // @ts-ignore
  blackKey: (octave: number, whiteKey: string) => {
    const blackKeyWidth = (layoutProps.keyWidth * 2) / 3;

    return {
      width: blackKeyWidth,
      borderWidth: 1,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
      height: (layoutProps.height * 2) / 3,
      backgroundColor: 'black',
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowOffset: {height: 1, width: 0},
      position: 'absolute',
      zIndex: 1,
      left:
        octave * (layoutProps.keyWidth * 7) +
        (layoutProps.keyWidth * KEY_IDX_MAP[whiteKey] - blackKeyWidth / 2),
    };
  },
});

export default PianoKeyboard;
