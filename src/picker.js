import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from './components/button';
import { STORAGE_PERMISSION, CAMERA_PERMISSION } from './utils/permissions';
import checkPermission from './utils/permissions';

const Picker = ({ onClose }) => {

  const [image, setImage] = useState(null);

  const onSelectOption = (type) => {
    const requiredPermission = type === 'camera' ? CAMERA_PERMISSION : STORAGE_PERMISSION;
    const callbackFunction = type === 'camera' ? selectedImageFromCamera : selectImageFromGallery;
    checkPermission(requiredPermission, callbackFunction);
  }


  const selectedImageFromCamera = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, res => {
      try {
        setImage(res?.assets[0]?.uri);
      } catch (err) {
        console.log('err ', err);
      }
    });
  };

  const selectImageFromGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, res => {
      try {
        setImage(res?.assets[0]?.uri);
      } catch (err) {
        console.log('err ', err);
      }
    });
  }

  return (
    <SafeAreaView style={styles.container}>

      <Button
        label={'Go Back'}
        onPress={onClose}
      />
      <Button
        label={'Take a picture'}
        onPress={() => onSelectOption('camera')}
      />
      <Button
        label={'Select from gallery'}
        onPress={() => onSelectOption('photo')}
      />

      {image && (
        <Image source={{ uri: image }} style={styles.img} resizeMode={'cover'} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  img: {
    width: '90%',
    height: '60%',
    borderRadius: 15,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Picker;
