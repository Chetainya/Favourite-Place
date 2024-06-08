import PlaceForm from "../Components/Places/PlaceForm"

function AddPlace({navigation}){
    function onCreatePlaceHandeler(place){
        navigation.navigate('AllPlaces' , {
            place : place
        })

    }
    
    return <PlaceForm onCreatePlace={onCreatePlaceHandeler} />
}

export default AddPlace



