import { Alert, Image, StyleSheet, View } from "react-native";
import {PermissionStatus, launchCameraAsync, useCameraPermissions} from 'expo-image-picker'
import { useEffect, useState } from "react";
import OutlineButton from "../UI/OutlineButton";


function ImagePicker({onPickImage}){
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
    const [image , setImage] = useState('');

    async function verifyPermissions(){
        if(cameraPermissionInfo.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
         if(cameraPermissionInfo.status === PermissionStatus.DENIED){
            Alert.alert('Insufficient Priviligies' , 'Please grant camera access to save your favourite Places');
            return false
        }

        return true
    }

    async function handleImagePicker(){
        const hasPermission = await verifyPermissions();
        if(!hasPermission){
            return
        }
        const image = await launchCameraAsync({
            allowsEditing : true,
            quality : 0.5
        })
        console.log('uri' , image.assets[0].uri)
        setImage(image.assets[0].uri)
    }

    useEffect(() => {

        onPickImage(image)
    } , [image , onPickImage])
    return <View>
        <View style={styles.imageContainer} >
            {image && <Image style={styles.image} source={{uri : image}} />}
        </View>
        {/* <Button title="Add Image" onPress={handleImagePicker} /> */}
        <OutlineButton name='image' color='white' onPress={handleImagePicker}>Image</OutlineButton>
     
    </View>
}

export default ImagePicker

const styles = StyleSheet.create({
    imageContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : 200,
        padding : 10
    } ,
    image : {
        height : '100%',
        width : '100%'

    }
})
