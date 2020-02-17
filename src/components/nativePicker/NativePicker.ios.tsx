import React, {FC} from 'react';
import {requireNativeComponent, View} from 'react-native';
import {PickerViewProps} from './NativePicker.interface';

const PickerView = requireNativeComponent('PickerView');

const PickerViewIos: FC<PickerViewProps> = ({
  containerStyle,
  items,
  onItemChange,
}) => {
  const _onItemChange = (event: any) => {
    onItemChange(items[event.nativeEvent.itemIndex]);
  };

  return (
    <View style={containerStyle}>
      <PickerView
        onItemChange={_onItemChange}
        style={containerStyle}
        items={items}
      />
    </View>
  );
};

export default PickerViewIos;
