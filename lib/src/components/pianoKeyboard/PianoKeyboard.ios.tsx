import React, {FC} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';

const BlackKey: FC<any> = ({containerStyle, octave, whiteKeyIdx}) => {
  return (
    <TouchableOpacity
      style={{...styles.blackKey(octave, whiteKeyIdx), ...containerStyle}}
    />
  );
};

const WhiteKey: FC<any> = ({containerStyle}) => {
  return (
    <TouchableOpacity style={{...styles.whiteKeyContainer, ...containerStyle}}>
      <View style={styles.whiteKey} />
    </TouchableOpacity>
  );
};

const PianoKeyboard: FC<any> = ({containerStyle}) => {
  return (
    <ScrollView horizontal={true}>
      <View style={{...styles.container, ...containerStyle}}>
        <WhiteKey />
        <BlackKey octave={0} whiteKeyIdx={1} />
        <WhiteKey />
        <BlackKey octave={0} whiteKeyIdx={2} />
        <WhiteKey />
        <WhiteKey />
        <BlackKey octave={0} whiteKeyIdx={4} />
        <WhiteKey />
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
