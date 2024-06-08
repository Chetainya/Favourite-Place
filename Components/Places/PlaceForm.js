import { useCallback, useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "../../utils/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/PlaceModal";

function PlaceForm({onCreatePlace}){

    const [enteredTitle , setEnteredTitle] = useState('');
    const [pickedLocation , setPickedLocation] = useState('')
    const [PickedImage , setPickedImage] = useState('')

    const onPickImageHandeler = useCallback((ImageUri) => {

        setPickedImage(ImageUri)
    } , [])

    const onPickLocationHandeler = useCallback((data) => {

        setPickedLocation(data)
    } , [])

    function titleChangeHandeler(enteredText){
        setEnteredTitle(enteredText)

    }

    function addPlaceHandeler(){
        
        const place = new Place(enteredTitle , PickedImage , pickedLocation)
        console.log(place)
        onCreatePlace(place)
    }

    return <ScrollView>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Title</Text>
            <TextInput style={styles.input} placeholder="Enter Title" value={enteredTitle} onChangeText={titleChangeHandeler}></TextInput>
        </View>
        <ImagePicker onPickImage={onPickImageHandeler} />
        <LocationPicker onPickLocation={onPickLocationHandeler} />
        <View style={styles.submit}>

        <Button title='Submit' onPress={addPlaceHandeler} />
        </View>
    </ScrollView>
}
export default PlaceForm



const styles = StyleSheet.create({
    inputContainer : {
        padding : 20,
        gap : 10
    },
    input : {
        backgroundColor : Colors.primary200,
        padding : 10,
        borderRadius : 10
    },
    text : {
        color : Colors.primary200
    },
    submit : {
        padding : 10
    }
})