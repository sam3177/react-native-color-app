import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorSquare = ({ hexCode }) => {
	const style = { backgroundColor: hexCode };
	return <View style={[ styles.box, style ]} />;
};
const styles = StyleSheet.create({
	box : {
		width         : 30,
		height        : 30,
		margin        : 2,
		shadowColor   : '#000',
		shadowOffset  : { width: 0, height: 1 },
		shadowOpacity : 0.5,
		shadowRadius  : 2,
		elevation     : 3,
	},
});

export default ColorSquare;
