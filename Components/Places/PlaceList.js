import {FlatList, StyleSheet, Text, View} from 'react-native'
import PlaceItem from './PlaceItem'
import { Colors } from '../../utils/Colors'


function PlaceList({places}){

    console.log('All Places' , places)
    if(places.length === 0){
        return <View style={styles.container}>
            <Text style={styles.text}>Add Your Favourite Place</Text>
        </View>
    }


    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={({item}) => <PlaceItem place={item}/>} />
    )
}

export default PlaceList

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        color : Colors.primary200,
        fontSize : 20
    }
})