import React, {FC, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';

import {PianoKeyboardProps, KeyImpactProviderProps, KeyProps, OnKeyPressPayload, KeysState, PressedKeys} from './types';

const BlackKey: FC<KeyProps> = ({name, pressedBy, containerStyle, onKeyPress}) => {
  const [whiteKey, , octave] = name.split('/')[0].split('');
  const keyStyle = {
    ...containerStyle,
    ...styles.blackKey(parseInt(octave, 10), whiteKey),
  };

  if (pressedBy) {
    keyStyle.backgroundColor = pressedBy === 'any' ? layoutColors.anyBlackFingerColor : FINGER_COLOR_MAP[pressedBy];
    keyStyle.borderColor = layoutColors.primaryBorderColor;
  }

  return <TouchableOpacity style={keyStyle} activeOpacity={1} onPress={() => onKeyPress && onKeyPress(name)}/>;
};

const WhiteKey: FC<KeyProps> = ({name, pressedBy, containerStyle, onKeyPress}) => {
  const keyStyle = {...styles.whiteKey};
  // TODO: use name for midi
  if (pressedBy) {
    keyStyle.backgroundColor = FINGER_COLOR_MAP[pressedBy];
  }

  return (
    <TouchableOpacity
      style={{...styles.whiteKeyContainer, ...containerStyle}}
      onPress={() => onKeyPress && onKeyPress(name)}
      activeOpacity={0.6}>
      <View style={keyStyle}/>
    </TouchableOpacity>
  );
};

class KeyImpactProvider extends React.Component<KeyImpactProviderProps> {
  _getPressedByName(name: string): string | undefined {
    const names = name.split('/');
    return [...names, name].map((it: string) => this.props.pressedKeys[it]).find(Boolean);
  }

  // todo improve typings
  render() {
    const childrenWithPressedBy = React.Children.map<React.ReactNode, React.ReactElement>(
      // @ts-ignore
      this.props.children,
      (child: React.ReactElement<KeyProps>) =>
        React.cloneElement<KeyProps>(child, {
          pressedBy: this._getPressedByName(child.props.name),
          onKeyPress: (name: string) => this.props.onKeyPress(name),
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

  useEffect(() => {
    if (startingPosition !== undefined) {
      scrollToPosition();
    }
  }, [startingPosition]);

  const scrollToPosition = () => {
    scrollRef.current?.scrollTo(0, (layoutProps.keyWidth * startingPosition) + layoutProps.margin, false);
  };

  const updateKeyStates = (key: string) => {
    const update = {
      ...pressedKeys
    };

    if (update.hasOwnProperty(key)) {
      delete update[key];
    } else {
      update[key] = 'any';
    }

    onKeysUpdate(update);
  };

  return (
    <ScrollView ref={scrollRef} onLayout={scrollToPosition} horizontal={true} scrollEnabled={scrollEnabled}>
      <View style={{...styles.container, ...containerStyle}}>
        <KeyImpactProvider pressedKeys={pressedKeys} onKeyPress={updateKeyStates}>
          <WhiteKey name={'C0'}/>
          <BlackKey name={'C#0'}/>
          <WhiteKey name={'D0'}/>
          <BlackKey name={'D#0'}/>
          <WhiteKey name={'E0'}/>
          <WhiteKey name={'F0'}/>
          <BlackKey name={'F#0'}/>
          <WhiteKey name={'G0'}/>
          <BlackKey name={'G#0'}/>
          <WhiteKey name={'A0'}/>
          <BlackKey name={'A#0'}/>
          <WhiteKey name={'B0'}/>

          <WhiteKey name={'C1'}/>
          <BlackKey name={'C#1'}/>
          <WhiteKey name={'D1'}/>
          <BlackKey name={'D#1'}/>
          <WhiteKey name={'E1'}/>
          <WhiteKey name={'F1'}/>
          <BlackKey name={'F#1'}/>
          <WhiteKey name={'G1'}/>
          <BlackKey name={'G#1'}/>
          <WhiteKey name={'A1'}/>
          <BlackKey name={'A#1'}/>
          <WhiteKey name={'B1'}/>

          <WhiteKey name={'C2'}/>
          <BlackKey name={'C#2'}/>
          <WhiteKey name={'D2'}/>
          <BlackKey name={'D#2'}/>
          <WhiteKey name={'E2'}/>
          <WhiteKey name={'F2'}/>
          <BlackKey name={'F#2'}/>
          <WhiteKey name={'G2'}/>
          <BlackKey name={'G#2'}/>
          <WhiteKey name={'A2'}/>
          <BlackKey name={'A#2'}/>
          <WhiteKey name={'B2'}/>

          <WhiteKey name={'C3'}/>
          <BlackKey name={'C#3'}/>
          <WhiteKey name={'D3'}/>
          <BlackKey name={'D#3'}/>
          <WhiteKey name={'E3'}/>
          <WhiteKey name={'F3'}/>
          <BlackKey name={'F#3'}/>
          <WhiteKey name={'G3'}/>
          <BlackKey name={'G#3'}/>
          <WhiteKey name={'A3'}/>
          <BlackKey name={'A#3'}/>
          <WhiteKey name={'B3'}/>

          <WhiteKey name={'C4'}/>
          <BlackKey name={'C#4'}/>
          <WhiteKey name={'D4'}/>
          <BlackKey name={'D#4'}/>
          <WhiteKey name={'E4'}/>
          <WhiteKey name={'F4'}/>
          <BlackKey name={'F#4'}/>
          <WhiteKey name={'G4'}/>
          <BlackKey name={'G#4'}/>
          <WhiteKey name={'A4'}/>
          <BlackKey name={'A#4'}/>
          <WhiteKey name={'B4'}/>

          <WhiteKey name={'C5'}/>
          <BlackKey name={'C#5'}/>
          <WhiteKey name={'D5'}/>
          <BlackKey name={'D#5'}/>
          <WhiteKey name={'E5'}/>
          <WhiteKey name={'F5'}/>
          <BlackKey name={'F#5'}/>
          <WhiteKey name={'G5'}/>
          <BlackKey name={'G#5'}/>
          <WhiteKey name={'A5'}/>
          <BlackKey name={'A#5'}/>
          <WhiteKey name={'B5'}/>

          <WhiteKey name={'C6'}/>
          <BlackKey name={'C#6'}/>
          <WhiteKey name={'D6'}/>
          <BlackKey name={'D#6'}/>
          <WhiteKey name={'E6'}/>
          <WhiteKey name={'F6'}/>
          <BlackKey name={'F#6'}/>
          <WhiteKey name={'G6'}/>
          <BlackKey name={'G#6'}/>
          <WhiteKey name={'A6'}/>
          <BlackKey name={'A#6'}/>
          <WhiteKey name={'B6'}/>

          <WhiteKey name={'C7'}/>
          <BlackKey name={'C#7'}/>
          <WhiteKey name={'D7'}/>
          <BlackKey name={'D#7'}/>
          <WhiteKey name={'E7'}/>
          <WhiteKey name={'F7'}/>
          <BlackKey name={'F#7'}/>
          <WhiteKey name={'G7'}/>
          <BlackKey name={'G#7'}/>
          <WhiteKey name={'A7'}/>
          <BlackKey name={'A#7'}/>
          <WhiteKey name={'B7'}/>

          <WhiteKey name={'C8'}/>
          <BlackKey name={'C#8'}/>
          <WhiteKey name={'D8'}/>
          <BlackKey name={'D#8'}/>
          <WhiteKey name={'E8'}/>
          <WhiteKey name={'F8'}/>
          <BlackKey name={'F#8'}/>
          <WhiteKey name={'G8'}/>
          <BlackKey name={'G#8'}/>
          <WhiteKey name={'A8'}/>
          <BlackKey name={'A#8'}/>
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

  anyWhiteFingerColor: '#eaeaea',
  anyBlackFingerColor: '#636363',
};

const FINGER_COLOR_MAP: {[key: string]: string} = {
  thumb: layoutColors.thumbFingerColor,
  index: layoutColors.indexFingerColor,
  middle: layoutColors.middleFingerColor,
  ring: layoutColors.ringFingerColor,
  little: layoutColors.littleFingerColor,
  any: layoutColors.anyWhiteFingerColor,
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
