import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { observer, inject } from 'mobx-react';

const CountScreen = ({ CountStore }: any) => {

    const { total, increment } = CountStore;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => increment('+')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, width: 20, paddingHorizontal: 20 }}>
                <Image style={{ height: 40, width: 40 }} source={require('../../../assets/plus.png')} />
            </TouchableOpacity>
            <Text>{total}</Text>
            <TouchableOpacity onPress={() => increment('-')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, width: 20, paddingHorizontal: 20 }}>
                <Image style={{ height: 40, width: 40 }} source={require('../../../assets/minus.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default inject('CountStore')(observer(CountScreen));
