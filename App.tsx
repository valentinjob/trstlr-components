/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HorizontalPicker from './src/components/HorizontalPicker';
import Snap from './src/components/Snap';
import NativePicker from './src/components/NativePicker';

declare var global: { HermesInternal: null | {} };

const items = [
    'C',
    'C',
    'C',
    'C',    'C',
    'C',
    'C',    'C',
    'C',
    'C',    'C',
    'C',
    'C',    'C',
    'C',
    'C',    'C',
    'C',
    'C',    'C',
    'C',
    'C',
];

const App = () => {

    const [selected, setSelected] = useState(0);

    const renderItem = (item, active) => {
        return (
            <Text style={{color: active ? 'blue' : '#666666', fontSize: active ? 18 : 16}}>{item}</Text>
        )
    };

    const onItemSelected = (item, ind) => {
        setSelected(ind);
    };
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Snap active={selected} itemWidth={80} items={items} renderItem={renderItem}
                      onItemSelected={onItemSelected} />
                      <NativePicker style={styles.nativeView}/>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    nativeView: {
        height: 300,
        width: 300
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
