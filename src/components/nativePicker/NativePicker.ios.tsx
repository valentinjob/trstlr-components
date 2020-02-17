import React, {FC} from 'react';
import {requireNativeComponent} from 'react-native';
import {PickerViewProps} from './NativePicker.interface';

const PickerView = requireNativeComponent('PickerView');

const PickerViewIos: FC<PickerViewProps> = ({containerStyle}) => {
  return (
    <>
      <PickerView style={containerStyle} />
    </>
  );
};

export default PickerViewIos;
