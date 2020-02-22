import React, {FC} from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {PickerViewProps} from './NativePicker.interface';

const PickerView = requireNativeComponent('PickerView');

const {width} = Dimensions.get('window');

const layoutProps = {
  marginTop: 30,
  height: 45,
  focusExtraTopSpace: 5,
};

const PickerViewAndroid: FC<PickerViewProps> = ({
  containerStyle,
  items,
  onItemChange,
}) => {
  const _onItemChange = (event: any) => {
    onItemChange(items[event.nativeEvent.itemIndex]);
  };
  return (
    <View style={containerStyle}>
      <MaskedView
        style={containerStyle}
        maskElement={
          <LinearGradient
            style={styles.maskContainer}
            colors={['transparent', 'black', 'transparent']}
            start={{x: -0.2, y: 1}}
            end={{x: 1.2, y: 1}}
          />
        }>
        <PickerView
          onItemChange={_onItemChange}
          items={items}
          style={[containerStyle, styles.wrapper]}
        />
      </MaskedView>
      <View pointerEvents={'none'} style={styles.focus(width)} />
    </View>
  );
};

const styles = StyleSheet.create({
  // @ts-ignore
  focus: (screenWidth: number, focusWidth: number = 80) => ({
    position: 'absolute',
    width: focusWidth,
    height: layoutProps.height,
    borderWidth: 1,
    borderColor: 'blue',
    left: width / 2 - focusWidth / 2,
    borderRadius: 5,
    top: layoutProps.marginTop + layoutProps.focusExtraTopSpace,
  }),
  maskContainer: {
    flex: 1,
  },
  wrapper: {
    marginTop: layoutProps.marginTop,
  },
});

export default PickerViewAndroid;
