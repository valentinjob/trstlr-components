import React, {FC} from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {PickerViewProps} from './NativePicker.interface';

const PickerView = requireNativeComponent('PickerView');

const {width} = Dimensions.get('window');

const PickerViewAndroid: FC<PickerViewProps> = ({containerStyle}) => {
  return (
    <>
      <PickerView style={containerStyle} />
      <View pointerEvents={'none'} style={styles.focus(width)} />
    </>
  );
};

const styles = StyleSheet.create({
  focus: (screenWidth: number, focusWidth: number = 80) => ({
    position: 'absolute',
    width: focusWidth,
    height: 50,
    borderWidth: 1,
    borderColor: 'blue',
    left: width / 2 - focusWidth / 2,
    borderRadius: 5,
  }),
});

export default PickerViewAndroid;
