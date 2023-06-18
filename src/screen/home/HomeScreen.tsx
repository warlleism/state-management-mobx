import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { observer, inject } from 'mobx-react';
import CountScreen from '../count/countScreen';
import ListItens from '../list-itens/list-itens';

const HomeScreen = ({ CountStore }: any) => {

  const { total } = CountStore;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Contador</Text>
        <Text style={{ fontSize: 50 }}>{total}</Text>
      </View>
      <CountScreen />
      <ListItens />
    </ScrollView>
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
