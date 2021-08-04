import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Select = ({onPress}) => {

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => onPress('picker') }>
				<Text style={styles.buttonText}>react-native-image-picker</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={() => onPress('crop-picker')} resize>
				<Text style={styles.buttonText}>react-native-image-crop-picker</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
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

export default Select;
