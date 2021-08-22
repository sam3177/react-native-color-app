import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
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
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="Palette"
					component={ColorPalette}
					options={({ route }) => ({
						title : route.params.name.replace('_', ' '),
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
