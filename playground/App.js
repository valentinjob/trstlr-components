import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {HorizontalPicker} from 'trstlr-components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <HorizontalPicker containerStyle={styles.container} items={['C', 'D', 'B']} onItemChange={(it) => console.log(it)} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
   horizontalPicker: {
       height: 200,
       width: '100%'
   },
    container: {
       flex: 1
    }
});

export default App;
