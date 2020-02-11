import React, {FC, useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const {width: screenWidth} = Dimensions.get('window');

export const translateZ = (perspective: number, z: number) => ({
  scale: perspective / (perspective - z),
});

interface HorizontalPickerProps {
  items: [ItemProps];
  itemWidth: number;
  initialIndex: number;
  onSelect: Function;
}

interface ItemProps {
  label: string;
  value: string | number;
}

type FCExt<T> = FC<T> & {Item: FC<ItemProps>};

const HorizontalPicker: FCExt<HorizontalPickerProps> = ({
  itemWidth,
  initialIndex,
  items,
  onSelect,
}) => {
  const [scrollWidth, setScrollWidth] = useState(items.length * itemWidth);
  const [selected, setSelected] = useState(initialIndex);
  const [viewWidth] = useState(screenWidth / itemWidth);
  const scrollView = useRef();
  let scrollOffset = 0;

  const context = {
      isParking: false
  };

  const normalizeIndex = (index: number) => index - 4;

  const renderItem = (label: string, index: number) => {
      console.log('index', normalizeIndex(index))
      console.log('selected', selected)
      // console.log(normalizeIndex(index) === selected);
    return (
      <View style={[styles.itemWrapper(itemWidth)]}>
        <Text style={styles.itemText(normalizeIndex(index) === selected)}>{label}</Text>
      </View>
    );
  };

  const renderEmptyItem = (index: number) => {
    return (
      <Animated.View
        style={[
          styles.itemWrapperEmpty(itemWidth),
          {
            transform: [
              {
                perspective: 400,
              },
              // translateZ(400, -(distance * 10)),
            ],
          },
        ]}>
        {/*<View style={{*/}
        {/*    backgroundColor: 'red', borderTopRightRadius: 5,*/}
        {/*    borderRightWidth: 1,*/}
        {/*    borderRightColor: 'black',*/}
        {/*}}>*/}
        {/*    <Text style={{fontSize: 24}}>{index}</Text>*/}
        {/*</View>*/}
      </Animated.View>
    );
  };

  const handleParking = () => {
    console.log('parkign');
    // const {size} = this.state;
    // const {onSelect, items} = this.props;
    //
    // // this.isParking = true;
    //
    context.isParking = true;
    setTimeout(() => {
        console.log(context.isParking)
      // if (this.isParking) {
      if (context.isParking) {
      const selectedIdx = selectItem();
      console.log(selectedIdx);
      // this.setState({
      //   selected,
      // });
          context.isParking = false;
      if (scrollView.current) {
        console.log('length', itemWidth * selected);
        scrollView.current.scrollTo({
          y: 0,
          x: itemWidth * selectedIdx,
          animated: true,
        });
      }
          context.isParking = false;
      }
      // onSelect(items[selectedIdx].value);
    }, 150);
    // }, 150);
  };

  const selectItem = () => {
    // const {items, onSelect} = this.props;
    const idx =
      Math.round(scrollOffset / itemWidth) > 0
        ? Math.round(scrollOffset / itemWidth)
        : 0;
    const selected = idx === items.length - 4 ? idx - 1 : idx;

    setSelected(selected);

    // onSelect(items[selected].value);
    return selected;
  };

  const handleScroll = event => {
    scrollOffset = event.nativeEvent.contentOffset.x;
  };

  const cancelParking = () => {
    isParking = false;
  };

  const calculateLayout = () => {
    scrollView.current.scrollTo({
      x: initialIndex,
      y: 0,
      animated: false,
    });
  };

  console.log('screen', screenWidth / itemWidth);
  const sideItems = Math.round((viewWidth - 1) / 2);
  console.log(items);

  return (
    <View style={[styles.container]}>
      <MaskedView
        maskElement={
          <LinearGradient
            style={[{width: screenWidth, height: 49}, {}]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={['transparent', 'white', 'transparent']}
          />
        }>
        <View style={{height: 500}}>
          <View
            style={[
              styles.itemSelected,
              {width: itemWidth, left: sideItems * itemWidth},
            ]}
          />
          <ScrollView
            horizontal
            ref={scrollView}
            showsHorizontalScrollIndicator={false}
            // onLayout={calculateLayout}
            snapToInterval={viewWidth}
            onScroll={handleScroll}
            onTouchEnd={handleParking}
            onScrollEndDrag={handleParking}
            contentOffset={{
              x: itemWidth * (sideItems - 1),
            }}
            scrollEventThrottle={16}
            onMomentumScrollBegin={cancelParking}
            onMomentumScrollEnd={selectItem}
            shouldCancelWhenOutside={false}>
            {items.map((it, index) =>
              it.label === '-1'
                ? renderEmptyItem(index)
                : renderItem(it.label, index),
            )}
          </ScrollView>
        </View>
      </MaskedView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: (width: number) => ({
    padding: 16,
    width,
      height: 55,
  }),
    itemText: (selected: boolean) => ({
        fontSize: selected ? 20 : 16,
        color: selected ? '#255ED6' : '#666666',
    }),
  itemWrapperEmpty: (width: number) => ({
    padding: 16,
    // borderWidth: 1,
    // borderTopRightRadius: 5,
    // borderRightWidth: 1,
    // borderRightColor: 'black',
    width,
  }),
  itemSelected: {
    borderColor: '#255ED6',
    borderWidth: StyleSheet.hairlineWidth,
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flexDirection: 'row',
    // paddingHorizontal: 24,
  },
});

export default HorizontalPicker;
