import React, { useState } from 'react';
import { SafeAreaView, Image } from 'react-native';
import Button from './components/button';
import ImagePicker from 'react-native-image-crop-picker';
import checkPermission from './utils/permissions';
import { STORAGE_PERMISSION, CAMERA_PERMISSION } from './utils/permissions';
import styles from './styles';

const CropPicker = ({ onClose }) => {

	const [image, setImage] = useState(null);

	const onSelectOption = (type) => {
		const requiredPermission = type === 'camera' ? CAMERA_PERMISSION : STORAGE_PERMISSION;
		const callbackFunction = type === 'camera' ? selectedImageFromCamera : selectImageFromGallery;
		checkPermission(requiredPermission, callbackFunction);
	}

	const selectedImageFromCamera = () => {
		ImagePicker.openCamera({
			mediaType: 'photo'
		}).then(image => {
			setImage(image?.path)
		}).catch((err) => {
			console.log(err);
		});
	};

	const selectImageFromGallery = () => {
		ImagePicker.openPicker({
			mediaType: 'photo'
		}).then(image => {
			setImage(image?.path)
		}).catch((err) => {
			console.log(err);
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

export default CropPicker;
