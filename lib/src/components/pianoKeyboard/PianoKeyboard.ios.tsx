import React, {FC} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';

// TODO: what does it want from me?
const getColorByFinger = (finger: string) => {
  const map = {
    thumb: layoutColors.thumbFingerColor,
    index: layoutColors.indexFingerColor,
    middle: layoutColors.middleFingerColor,
    ring: layoutColors.ringFingerColor,
    little: layoutColors.littleFingerColor,
  };

  return map[finger];
};

const PressedKey: FC<any> = ({}) => {
  // TODO: implement pressed key hoc
};

const BlackKey: FC<any> = ({containerStyle, octave, whiteKeyIdx}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{...styles.blackKey(octave, whiteKeyIdx), ...containerStyle}}
    />
  );
};

const WhiteKey: FC<any> = ({containerStyle, pressedBy}) => {
  const keyStyle = {...styles.whiteKey};

  if (pressedBy) {
    keyStyle.backgroundColor = getColorByFinger(pressedBy);
  }

  return (
    <TouchableOpacity
      style={{...styles.whiteKeyContainer, ...containerStyle}}
      activeOpacity={0.6}>
      <View style={keyStyle} />
    </TouchableOpacity>
  );
};

const PianoKeyboard: FC<any> = ({containerStyle}) => {
  // TODO: selectKeys props

  return (
    <ScrollView horizontal={true}>
      <View style={{...styles.container, ...containerStyle}}>
        <WhiteKey pressedBy={'thumb'} />
        <BlackKey octave={0} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={0} whiteKeyIdx={2} />
        <WhiteKey pressedBy={'middle'} />
        <WhiteKey />
        <BlackKey octave={0} whiteKeyIdx={4} />
        <WhiteKey pressedBy={'little'} />
        <BlackKey octave={0} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={0} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={1} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={1} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={1} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={1} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={1} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={2} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={2} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={2} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={2} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={2} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={3} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={3} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={3} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={3} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={3} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={4} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={4} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={4} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={4} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={4} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={5} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={5} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={5} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={5} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={5} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={6} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={6} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={6} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={6} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={6} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={7} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={7} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={7} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={7} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={7} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
        <BlackKey octave={8} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={8} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={8} whiteKeyIdx={4} />
        <WhiteKey />
        <BlackKey octave={8} whiteKeyIdx={5} />
        <WhiteKey />
        <BlackKey octave={8} whiteKeyIdx={6} />
        <WhiteKey />

        <WhiteKey />
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
  blackKey: (octave: number, whiteKeyIdx: number) => {
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
        (layoutProps.keyWidth * whiteKeyIdx - blackKeyWidth / 2),
    };
  },
});

export default PianoKeyboard;
