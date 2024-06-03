import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "../../utils/Colors";
import ImagePicker from "./ImagePicker";

function PlaceForm(){

    const [enteredTitle , setEnteredTitle] = useState('');

    function titleChangeHandeler(enteredText){
        setEnteredTitle(enteredText)

    }

    return <ScrollView>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Title</Text>
            <TextInput style={styles.input} placeholder="Enter Title" value={enteredTitle} onChangeText={titleChangeHandeler}></TextInput>
        </View>
        <ImagePicker />
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
    }
})