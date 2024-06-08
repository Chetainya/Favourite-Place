import { StyleSheet, Text, View } from "react-native"
import { useNavigation , useRoute , useIsFocused } from '@react-navigation/native';

import OutlineButton from "../UI/OutlineButton"
import {getCurrentPositionAsync , useForegroundPermissions , PermissionStatus} from 'expo-location'
import { Colors } from "../../utils/Colors";
import { useEffect, useState } from "react";

function LocationPicker({onPickLocation}){
    const [locationPermissionStatus , requestPermission] = useForegroundPermissions();
    const [userLocation , setUserLocation] = useState('');
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute();
    
    useEffect(() => {
        if(isFocused && route.params){
            console.log('route params' , route.params)
           
            setUserLocation({
                lat : route.params.lat,
                lng : route.params.lng
            })
        }
    } , [isFocused , route.params])

    useEffect(() => {
        onPickLocation(userLocation)
    } , [userLocation , onPickLocation])

    async function verifyPermissions(){
        if(locationPermissionStatus.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
         if(locationPermissionStatus.status === PermissionStatus.DENIED){
            Alert.alert('Insufficient Priviligies' , 'Please grant location access to save your favourite Places');
            return false
        }

        return true
    }


    async function getLocation(){
        const permission = await verifyPermissions();
        if(!permission){
            return
        }
        const location = await getCurrentPositionAsync({});
     
        setUserLocation({
            lat : location.coords.latitude,
            lng : location.coords.longitude
        })
    }

    function ChooseOnMapHandeler(){
        navigation.navigate('Map' , userLocation)

    }
    let mapPreview = <View style={styles.mapPreview}><Text >No Loaction Choosen</Text></View>

    if(userLocation){
        mapPreview = <View></View>
    }
    return <View>
        <View style={styles.mapContainer}>
            {mapPreview}
        </View>
        
        <View style={styles.buttonContainer}>
            <OutlineButton name="location-pin" color={Colors.primary200} onPress={getLocation}>User Location</OutlineButton>
            <OutlineButton name='address' color={Colors.primary200} onPress={ChooseOnMapHandeler}>Choose On Map</OutlineButton>
        </View>
    </View>
}

export default LocationPicker

const styles = StyleSheet.create({
    mapContainer : {
        height : 200,
        width : '100%',
        padding : 10,
        
       
    },
    mapPreview : {
        backgroundColor : Colors.primary200,
        borderRadius : 10,
        height : '100%',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    button : {
        justifyContent : 'center'
    }
})

