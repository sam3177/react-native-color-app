import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import NewColorPaletteModal from './screens/NewColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerStyle      : {
					backgroundColor : '#f4511e',
				},
				headerTintColor  : '#fff',
				headerTitleStyle : {
					fontWeight : 'bold',
				},
				headerTitleAlign : 'center',
			}}
		>
			<MainStack.Screen name="Home" component={Home} />
			<MainStack.Screen
				name="Palette"
				component={ColorPalette}
				options={({ route }) => ({
					title : route.params.paletteName.replace('_', ' '),
				})}
			/>
		</MainStack.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator >
				<RootStack.Screen
					name="Main"
					component={MainStackScreen}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen
					name="NewPalette"
					component={NewColorPaletteModal}
					options={{presentation: 'modal'}}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default App;
