import { Image, Pressable, View , Text } from "react-native"

function PlaceItem({place}){

    console.log(place)
    return <Pressable>
        <Image source={{uri : place.imageUri}} />
        <View>
            <Text>{place.title}</Text>
            <Text>{place.address}</Text>
        </View>
    </Pressable>

}

export default PlaceItem