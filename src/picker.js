import React, { useState } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from './components/button';
import { STORAGE_PERMISSION, CAMERA_PERMISSION } from './utils/permissions';
import checkPermission from './utils/permissions';
import styles from './styles';

const Picker = ({ onClose }) => {

  const [image, setImage] = useState(null);

  const onSelectOption = (type) => {
    const requiredPermission = type === 'camera' ? CAMERA_PERMISSION : STORAGE_PERMISSION;
    const callbackFunction = type === 'camera' ? selectedImageFromCamera : selectImageFromGallery;
    checkPermission(requiredPermission, callbackFunction);
  }

  const selectedImageFromCamera = () => {
    launchCamera({ mediaType: 'photo' }, res => {
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

export default Picker;
