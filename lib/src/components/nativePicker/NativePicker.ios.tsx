import React, {FC} from 'react';
import {
  Dimensions,
  requireNativeComponent,
  StyleSheet,
  View,
} from 'react-native';
import {PickerViewProps} from './NativePicker.interface';

const PickerView = requireNativeComponent('PickerView');

const {width} = Dimensions.get('window');

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
      <View pointerEvents={'none'} style={styles.focus(width)} />
    </View>
  );
};

const layoutProps = {
  marginTop: 20,
  height: 45,
  focusExtraTopSpace: 5,
};

const styles = StyleSheet.create({
  // @ts-ignore
  focus: (screenWidth: number, focusWidth: number = 80) => ({
    position: 'absolute',
    width: focusWidth,
    height: layoutProps.height,
    borderWidth: 1,
    borderColor: 'blue',
    left: width / 2 - focusWidth / 1.8,
    borderRadius: 5,
    top: layoutProps.marginTop + layoutProps.focusExtraTopSpace,
  }),
});

export default PickerViewIos;
