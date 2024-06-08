import { useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView , {Marker} from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import IconButton from '../Components/UI/IconButton';




function Map({navigation}){

    const [pickedLoaction , setPickedLocation] = useState('')
    const route = useRoute();

    function saveLocationHandeler(){
        if(!pickedLoaction){
            Alert.alert( 'No Location Detected' , 'Please Select a location to Save');
            return
        }
        navigation.navigate('AddPlace' , {
            lat : pickedLoaction.latitude,
            lng : pickedLoaction.longitude
        })
    }
    
   useLayoutEffect(() => {

    
    navigation.setOptions({
        headerRight :  ({tintColor})  => <IconButton name='save' size={24} tintColor={tintColor} onPress={saveLocationHandeler} />
    })
   } , [navigation , pickedLoaction])
    
    const initialRegion={
        latitude : route.params.lat|| 37.78,
        longitude : route.params.lng || -122.43,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0433
    }
    

    function locationSelectHandeler(event){

        setPickedLocation({
            latitude : event.nativeEvent.coordinate.latitude,
            longitude : event.nativeEvent.coordinate.longitude
        })

    }

    return <MapView onPress={locationSelectHandeler}  style={styles.map} initialRegion={initialRegion}>
        {pickedLoaction && <Marker coordinate={pickedLoaction} />}
    </MapView>
}

export default Map
const styles = StyleSheet.create({
    map : {
        flex : 1
    }
})