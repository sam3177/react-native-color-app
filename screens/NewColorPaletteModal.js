import React, { useState, useCallback } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	FlatList,
	Button,
	TouchableOpacity,
	Alert,
} from 'react-native';
import flatColors from '../assets/flatColors';
import ColorSwitch from '../components/ColorSwitch';

const NewColorPaletteModal = ({ navigation }) => {
	const [ paletteName, setPaletteName ] = useState('');
	const [ newPalette, setNewPalette ] = useState([]);
	const manageColors = useCallback((value, color) => {
		if (value) {
			const filteredArr = newPalette.filter(
				(c) => c.hexCode !== color.hexCode,
			);
			setNewPalette(filteredArr);
		} else {
			setNewPalette((old) => [ ...old, color ]);
		}
	});
	const handleSubmit = useCallback(() => {
		if (!paletteName) {
			Alert.alert('We need a name for our new palette!');
			return;
		}
		if (newPalette.length < 3) {
			Alert.alert('We need at least 3 colors in our new palette!');
			return;
		}
		navigation.navigate('Home', {
			newPalette : { paletteName, colors: newPalette },
		});
	},[paletteName,newPalette]);

	return (
		<View style={styles.container}>
			<Text>Let's create our own palette!</Text>
			<TextInput
				style={styles.input}
				onChangeText={setPaletteName}
				value={paletteName}
				placeholder="palette name"
			/>
			<FlatList
				style={styles.switchContainer}
				data={flatColors}
				keyExtractor={(palette) => palette.ColorName}
				ListEmptyComponent={<Text>List is empty, so what?</Text>}
				renderItem={(colors) => (
					<ColorSwitch
						{...colors.item}
						colors={newPalette}
						manageColors={manageColors}
					/>
				)}
			/>
			<TouchableOpacity style={styles.submit}>
				<Button
					onPress={handleSubmit}
					title="SUBMIT"
					color="#fff"
					accessibilityLabel="Submit new palette"
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	input           : {
		height         : 40,
		marginVertical : 12,
		borderWidth    : 1,
		padding        : 10,
	},
	container       : {
		padding : 10,
	},
	switchContainer : {
		// paddingHorizontal : 10,
		height       : '80%',
		borderRadius : 5,
	},
	submit          : {
		backgroundColor : '#f4511e',
		borderRadius    : 5,
		height          : 40,
		marginTop       : 5,
	},
});

export default NewColorPaletteModal;
