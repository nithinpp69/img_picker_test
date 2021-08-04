import { Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { check, request, RESULTS, openSettings } from 'react-native-permissions';

import { Alert } from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const CAMERA_PERMISSION = isIOS ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
export const STORAGE_PERMISSION = isIOS ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;


const openAppSettings = () => {
	Alert.alert(
		"Error",
		"Please enable permission from settings.",
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			},
			{ text: "OK", onPress: () => openSettings().catch(() => { }) }
		]
	);
};

const checkPermission = (permission, callback) => {
	console.log('permission ')
	check(permission).then((checkResult) => {
		console.log('checkResult ', checkResult)
		if (checkResult === RESULTS.DENIED || checkResult === RESULTS.UNAVAILABLE) {
			request(permission).then((requestResult) => {
				if (requestResult !== RESULTS.GRANTED) {
					openAppSettings();
				} else {
					if (callback && typeof callback === 'function')
						callback();
				}
			});
		}
		if (checkResult === RESULTS.BLOCKED || checkResult === RESULTS.UNAVAILABLE) {
			openAppSettings();
		}
		if (checkResult === RESULTS.GRANTED) {
			if (callback && typeof callback === 'function')
				callback();
		}
	});
}

export default checkPermission;