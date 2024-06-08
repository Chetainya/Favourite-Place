import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../utils/Colors";

function Button({title , onPress}){
    return <Pressable style={({pressed}) => [styles.buttonContainer , pressed && styles.pressed]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>

}

export default Button

const styles = StyleSheet.create({

    buttonContainer : {

        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Colors.primary200,
        borderRadius : 10,
        padding : 10,
        
    },
    buttonText : {

        fontWeight : 'bold'
    },
    pressed : {
        opacity : 0.50
    }
})