import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from './components/button';

const CropPicker = ({ onClose }) => {

	const [image, setImage] = useState(null);

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
				onPress={selectedImageFromCamera}
			/>
			<Button
				label={'Select from gallery'}
				onPress={selectImageFromGallery}
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
