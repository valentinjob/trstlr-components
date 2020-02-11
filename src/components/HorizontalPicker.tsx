import React, {FC, useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const {width: screenWidth} = Dimensions.get('window');

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

type FCExt<T> = FC<T> & { Item: FC<ItemProps> };

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
    let isParking = false;

    const renderItem = (label: string) => {
        return (
            <View style={[styles.itemWrapper(itemWidth)]}>
                <Text>{label}</Text>
            </View>
        );
    };

    const renderEmptyItem = (index: number) => {
        return (
            <Animated.View style={[styles.itemWrapperEmpty(itemWidth), {
              transform: [
                {
                  perspective: 600 + (index * 10)
                },
                {
                  scale: 600 / (600 - 10),
                },
                // {
                //   rotateY: `-${130 + (10 * index)}deg`
                // }
              ]
            }]}>
              <View style={{ backgroundColor: 'red', height: 60}}>
                {/*<Text style={{transform: [{ rotateY: `-${360 - 130 - (index + 30)}deg`}], fontSize: 24}}>{index}</Text>*/}
              </View>
            </Animated.View>
        )
    }

    const handleParking = () => {
        console.log('parkign');
        // const {size} = this.state;
        // const {onSelect, items} = this.props;
        //
        // // this.isParking = true;
        //
        isParking = true;
        setTimeout(() => {
            // if (this.isParking) {
            // if (isParking) {
            const selectedIdx = selectItem();
            console.log(selectedIdx);
            // this.setState({
            //   selected,
            // });
            // this.isParking = false;
            if (scrollView.current) {
                console.log('length', itemWidth * selected);
                scrollView.current.scrollTo({
                    y: 0,
                    x: itemWidth * selectedIdx,
                    animated: true,
                });
            }
            isParking = false;
            // }
            // onSelect(items[selectedIdx].value);
        }, 150);
        // }, 150);
    };

    const selectItem = () => {
        // const {items, onSelect} = this.props;
        const idx = Math.abs(Math.round(scrollOffset / itemWidth));
        const selected = idx === items.length ? idx - 1 : idx;

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
    console.log(items)

    return (
        <View style={[styles.container]}>
            <MaskedView maskElement={<LinearGradient style={[{ width: screenWidth, height: 100 }, {
              transform: [{
                perspective: 1000
              }]
            }]} start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['transparent', 'white', 'transparent']} />}>
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
                            x: itemWidth * (sideItems - 1)
                        }}
                        scrollEventThrottle={16}
                        onMomentumScrollBegin={cancelParking}
                        onMomentumScrollEnd={selectItem}
                        shouldCancelWhenOutside={false}>
                        {items.map((it, index) => it.label === '-1' ? renderEmptyItem(index) : renderItem(it.label))}

                    </ScrollView>
                </View>
            </MaskedView>
        </View>
    );
};

const styles = StyleSheet.create({
    itemWrapper: (width: number) => ({
        padding: 16,
        borderWidth: 1,
        width,
    }),
    itemWrapperEmpty: (width: number) => ({
        padding: 16,
        // borderWidth: 1,
        width,
    }),
    itemSelected: {
        backgroundColor: 'red',
        ...StyleSheet.absoluteFillObject,
    },
    container: {
      flexDirection: 'row'
        // paddingHorizontal: 24,
    },
});

export default HorizontalPicker;
