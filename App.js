import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Picker from './picker';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Picker />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
  }
});

export default App;
