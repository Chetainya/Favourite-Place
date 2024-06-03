import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
function IconButton({ name, size, tintColor , onPress }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.container , pressed && styles.pressed]}>
      <AntDesign name={name} size={size} color={tintColor} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  container : {

    justifyContent : 'center',
    alignItems : 'center',
    padding : 5
    
  }
});