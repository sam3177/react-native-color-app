import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import chroma from 'chroma-js';

const ColorSwitch = ({
	colorName,
	hexCode,
	colors,
	manageColors,
}) => {
	const lum = chroma(hexCode).luminance();
	const isInColors = colors.some((c) => c.hexCode === hexCode);
	const backgroundStyle = { backgroundColor: hexCode };
	const textStyle = { color: lum < 0.3 ? '#fff' : '#000' };
	return (
		<View style={[ styles.container, backgroundStyle ]}>
			<Text style={[ styles.text, textStyle ]}>{colorName}</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={isInColors ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={() =>
					manageColors(isInColors, { colorName, hexCode })}
				value={isInColors}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container : {
		width          : '100%',
		height         : 50,
		justifyContent : 'space-between',
		flexDirection  : 'row',
		alignItems     : 'center',
		marginVertical : 2,
		padding        : 5,
		shadowColor    : '#000',
		shadowOffset   : { width: 0, height: 1 },
		shadowOpacity  : 0.5,
		shadowRadius   : 2,
		elevation      : 3,
	},
	text      : {
		fontWeight : 'bold',
		// backgroundColor: 'cyan',
		fontSize   : 17,
		// width           : '70%'
	},
	switch    : {
		marginLeft : 'auto',
	},
});

export default ColorSwitch;
