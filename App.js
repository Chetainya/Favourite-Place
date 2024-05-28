import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllPlaces from './Screens/AllPlaces';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPlace from './Screens/AddPlace';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './utils/Colors';
import IconButton from './Components/UI/IconButton';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle : {
        backgroundColor : Colors.primary200
      }
    }}>
      <Stack.Screen name='AllPlaces' component={AllPlaces} options={{
        title : 'Your Favourite Places',
        headerTintColor : Colors.primary800,
        headerRight : ({tintColor})  => <IconButton name='pluscircleo' size={24} tintColor={tintColor} />
      }} />
      <Stack.Screen name='AddPlace' component={AddPlace} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


