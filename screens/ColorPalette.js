import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
	const { colors, paletteName } = route.params;
	return (
		<View style={styles.container}>
			<Text style={[ styles.text, styles.title ]}>
				{paletteName.replace('_', ' ')}
			</Text>
			<View style={styles.colorBoxContainer}>
				<FlatList 
					data={colors}
					renderItem={(colors) => <ColorBox {...colors.item} />}
					keyExtractor={(color) => color.hexCode}
					ListEmptyComponent={<Text>List is empty, so what?</Text>}
					// ListFooterComponent={<Text>Footer</Text>}
					// ListHeaderComponent={<Text>Header</Text>}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container         : {
		flex            : 1,
		backgroundColor : '#fff',
		padding         : 10,
		paddingTop      : 20,
		height          : 750,
		alignItems      : 'center',
	},
	areaView          : {
		flex : 1,
	},
	colorBoxContainer : {
		flex  : 1,
		width : '100%',
	},
	title             : {
		color      : '#000',
		fontWeight : 'bold',
		width      : '100%',
		textAlign  : 'left',
	},
	
});
export default ColorPalette;
