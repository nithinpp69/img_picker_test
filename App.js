import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Picker from './src/picker';
import CropPicker from './src/cropPicker';
import Select from './src/select';

const App = () => {

  const [value, setValue] = useState(null);

  const Content = () => {
    switch (value) {
      case null:
        return <Select onPress={(value) => setValue(value)} />;
      case 'picker':
        return <Picker onClose={() => setValue(null)} />;
      case 'crop-picker':
        return <CropPicker onClose={() => setValue(null)} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Content />
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
