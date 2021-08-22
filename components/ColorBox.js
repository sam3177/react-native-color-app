import React from 'react';
import { StyleSheet, Text } from 'react-native';
import chroma from 'chroma-js';

const ColorBox = ({ colorName, hexCode }) => {
	const lum = chroma(hexCode).luminance();
	const styleColor = {
		backgroundColor : hexCode,
		color           : lum < 0.3 ? '#fff' : '#000',
	};
	return (
		<Text style={[ styles.text, styleColor ]}>
			{colorName}: {hexCode}
		</Text>
	);
};

const styles = StyleSheet.create({
	text : {
		marginVertical  : 5,
		width           : '99%',
		textAlign       : 'center',
		paddingVertical : 5,
		fontSize        : 18,
		shadowColor     : '#000',
		shadowOffset    : { width: 0, height: 1 },
		shadowOpacity   : 0.5,
		shadowRadius    : 2,
		elevation       : 3,
	},
});
export default ColorBox;
