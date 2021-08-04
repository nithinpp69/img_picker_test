import React from 'react';
import { SafeAreaView } from 'react-native';
import Button from './components/button';
import styles from './styles';

const Select = ({ onPress }) => {

	return (
		<SafeAreaView style={styles.container}>
			<Button
				label={'react-native-image-picker'}
				onPress={() => onPress('picker')}
			/>
			<Button
				label={'react-native-image-crop-picker'}
				onPress={() => onPress('crop-picker')}
			/>
		</SafeAreaView >
	);
};

export default Select;
