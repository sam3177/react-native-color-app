import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from 'react-native';
import ColorSquare from './ColorSquare';

const PaletteTouchable = ({ name, colors, navigation }) => {
	return (
		<View>
			<TouchableOpacity
				style={styles.touchableSection}
				onPress={() =>
					navigation.navigate('Palette', {
						name,
						colors,
					})}
			>
				<Text style={styles.text}>{name.replace('_', ' ')}</Text>
				<View>
					<FlatList
						style={styles.boxContainer}
						data={colors.slice(0,5)}
						numColumns={5}
						renderItem={(colors) => <ColorSquare {...colors.item} />}
						keyExtractor={(color) => color.hexCode}
						ListEmptyComponent={<Text>List is empty, so what?</Text>}
						// ListFooterComponent={<Text>Footer</Text>}
						// ListHeaderComponent={<Text>Header</Text>}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	home             : {
		alignItems : 'center',
		flex       : 1,
		marginTop  : 20,
	},
	touchableSection : {
		marginVertical : 20,
	},
	boxContainer     : {
		flex          : 1,
		flexDirection : 'row',
		marginTop     : 10,
	},
	text             : {
		fontWeight : 'bold',
		fontSize   : 18,
	},
});

export default PaletteTouchable;
