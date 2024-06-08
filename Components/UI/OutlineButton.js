import {  Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Colors } from "../../utils/Colors";
function OutlineButton({name , onPress , color , children}){
    return <Pressable onPress={onPress} style={({pressed}) => [pressed && styles.pressed]}>
        <View style={styles.container}>
        <Entypo name={name} size={24} color={color} />
        <Text style={styles.text}>{children}</Text>
        </View>
    </Pressable>
}

export default OutlineButton


const styles = StyleSheet.create({

    container : {
        flexDirection : 'row',
        padding : 10,
        gap : 10,
        alignItems : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        borderColor : Colors.primary400,
        margin : 10
    },
    text : {
        color : 'white'
    },
    pressed : {
        opacity : 0.50
    }
})