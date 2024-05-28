import {FlatList, Text, View} from 'react-native'
import PlaceItem from './PlaceItem'

function PlaceList({places}){

    if(!places){
        return <View>
            <Text>Add Your Favourite Place</Text>
        </View>
    }


    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={({item}) => <PlaceItem place={item}/>} />
    )
}

export default PlaceList