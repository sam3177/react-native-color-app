import React from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import palettes from '../assets/palettes';
import PaletteTouchable from '../components/PaletteTouchable';

const Home = ({ navigation }) => {
	return (
		<View style={styles.home}>
			<FlatList
				data={palettes}
				renderItem={(palettes) => (
					<PaletteTouchable
						{...palettes.item}
						navigation={navigation}
					/>
				)}
				keyExtcractor={(palette) => palette.name}
				ListEmptyComponent={<Text>List is empty, so what?</Text>}
				// ListFooterComponent={<Text>Footer</Text>}
				// ListHeaderComponent={<Text>Header</Text>}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	home             : {
		paddingHorizontal:20,
		flex       : 1,
		backgroundColor:'#fff'
	},
	touchableSection : {
		marginVertical : 20,
	},
});

export default Home;
