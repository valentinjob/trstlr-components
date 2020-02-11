// @flow
// https://twitter.com/jevakallio/status/941258932529614848

import React, {Component} from 'react';
import styled from 'styled-components/native';
// import Touchable from 'react-native-platform-touchable';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';

// react-native-snap-carousel doesn't support setting different opacities
// for inactive items based on their distance from the active item, so we'll
// fake it here by fading the view in and out with gradients
const StartGradient = styled(LinearGradient).attrs({
  pointerEvents: 'none',
  colors: [
    'rgba(242, 242, 242, 0.6)',
    'rgba(242, 242, 242, 0.6)',
    'rgba(242, 242, 242, 0)',
  ],
  start: [0, 0.8, 1],
  end: [1, 0.8, 1],
})`
  width: ${p => p.width + 10}px;
  height: ${p => p.width}px;
  position: absolute;
  top: 0;
  left: 0;
`;

const EndGradient = styled(LinearGradient).attrs({
  pointerEvents: 'none',
  colors: [
    'white',
    'transparent',
    'white',
  ],
  start: {x: 0, y: 1},
  end: { x: 1, y: 1},
})`
  position: absolute;
  top: 0;
`;

// when an item is touched, we should snap to it
const ItemWrapper = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  background-color: transparent;
  width: ${p => p.width}px;
  height: ${p => p.width}px;
  align-items: center;
  justify-content: center;
`;

export default class Snap extends Component {
  carouselRef = null;

  static defaultProps = {
    itemWidth: 60,
    visibleItemCount: 5,
  };

  moveToItem = (index: number) => {
    if (this.carouselRef) {
      this.carouselRef.snapToItem(index);
    }
  };

  onSnapToItem = (index: number) => {
    this.props.onItemSelected(this.props.items[index], index);
    console.log('snap')
  };

  renderItem = ({item, index}) => {
    return (
      <ItemWrapper
        width={this.props.itemWidth}
        onPress={() => this.moveToItem(index)}>
        {this.props.renderItem(item, this.props.active === index)}
      </ItemWrapper>
    );
  };

  render() {
    const {items, initialItem, itemWidth, visibleItemCount, active} = this.props;
    console.log('active', active)
    return (
      <View style={styles.container}>
        <Carousel
          ref={ref => {
            this.carouselRef = ref;
          }}
          data={items}
          firstItem={active}
          renderItem={this.renderItem}
          onSnapToItem={this.onSnapToItem}
          sliderWidth={visibleItemCount * itemWidth}
          itemWidth={itemWidth}
          activeSlideOffset={20}
        />
        {/*<StartGradient width={itemWidth} />*/}
        <View
            pointerEvents={'none'}
          style={styles.focusBorder(itemWidth, (visibleItemCount - 1) / 2)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  focusBorder: (width, offset) => ({
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#255ED6',
      height: '60%',
    position: 'absolute',
    top: 18,
    left: width * offset,
      width,
  }),
});
