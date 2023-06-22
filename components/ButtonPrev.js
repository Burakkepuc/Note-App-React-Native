import {StyleSheet, Button, View} from 'react-native';
import React from 'react';

const ButtonPrev = props => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => props.onButtonClick('HOME')}
          title="Back"
          color="#457b9d"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: -320,
  },
  button: {
    margin: 15,
  },
});
export default ButtonPrev;
