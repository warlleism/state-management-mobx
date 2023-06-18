import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer, inject } from 'mobx-react';
import CountScreen from '../count/countScreen';

const HomeScreen = ({ CountStore }: any) => {

  const { total } = CountStore;

  return (
    <>
      <View style={styles.container}>
        <Text>Contador</Text>
        <Text style={{ fontSize: 50 }}>{total}</Text>
      </View>
      <CountScreen />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default inject('CountStore')(observer(HomeScreen));
