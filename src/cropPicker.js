import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from './components/button';
import { STORAGE_PERMISSION, CAMERA_PERMISSION } from './utils/permissions';
import checkPermission from './utils/permissions';

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
		});
	};

	const selectImageFromGallery = () => {
		ImagePicker.openPicker({
			mediaType: 'photo'
		}).then(image => {
			setImage(image?.path)
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
		height: '50%',
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

export default CropPicker;
