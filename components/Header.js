import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome Notes App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e63946',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    width: '100%',
    height: '15%',
  },
  title: {
    color: '#f1faee',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Header;
