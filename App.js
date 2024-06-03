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
        backgroundColor : Colors.primary400
      },
      contentStyle : {
        backgroundColor : Colors.primary800
      }
    }}>
      <Stack.Screen name='AllPlaces' component={AllPlaces} options={({navigation}) => ({
        title : 'Your Favourite Places',
        
        headerRight : ({tintColor})  => <IconButton name='pluscircleo' size={24} tintColor={tintColor} onPress={() => navigation.navigate('AddPlace')} />
      })} />
      <Stack.Screen name='AddPlace' component={AddPlace} options={{
        presentation : 'modal',
        title : 'Add Your Favourite Place'
      }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}