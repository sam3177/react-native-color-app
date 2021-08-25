import React, { useState, useCallback, useEffect } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Button,
} from 'react-native';
import PaletteTouchable from '../components/PaletteTouchable';

const Home = ({ navigation, route }) => {
	const newPalette = route.params
		? route.params.newPalette
		: undefined;
	const [ palettes, setPalettes ] = useState([]);
	const [ isRefreshing, setIsRefreshing ] = useState(false);
	const fetchPalettes = useCallback(async () => {
		const result = await fetch(
			'https://color-palette-api.kadikraman.now.sh/palettes',
		);
		const parsed = await result.json();
		if (result.ok) setPalettes(parsed);
	}, []);
	const handleRefresh = useCallback(async () => {
		setIsRefreshing(true);
		await fetchPalettes();
		setIsRefreshing(false);
	}, []);
	useEffect(() => {
		fetchPalettes();
	}, []);
	useEffect(
		() => {
			if (newPalette) setPalettes((old) => [ newPalette, ...old ]);
		},
		[ newPalette ],
	);

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
				keyExtcractor={(palette) => palette.colorName}
				ListEmptyComponent={<Text>List is empty, so what?</Text>}
				refreshing={isRefreshing}
				onRefresh={handleRefresh}
				ListHeaderComponent={
					<TouchableOpacity
						style={styles.newPalette}
						onPress={() => navigation.navigate('NewPalette')}
					>
						<Text style={styles.text}>Add new Palette</Text>
					</TouchableOpacity>
				}
				// ListHeaderComponent={<Text>Header</Text>}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	home             : {
		paddingHorizontal : 20,
		flex              : 1,
		backgroundColor   : '#fff',
	},
	touchableSection : {
		marginVertical : 20,
	},
	newPalette       : {
		backgroundColor : '#f4511e',
		borderRadius    : 5,
		height          : 40,
		marginTop       : 5,
		justifyContent  : 'center',
		width           : 'fit-content',
		alignItems      : 'center',
	},
	text             : {
		color      : '#fff',
		fontWeight : 'bold',
		fontSize   : 17,
	},
});

export default Home;
