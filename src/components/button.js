import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, label }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{label}</Text>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
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

export default Button;
