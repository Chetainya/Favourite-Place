import { useEffect, useState } from "react"
import PlaceList from "../Components/Places/PlaceList"
import {useIsFocused} from '@react-navigation/native'

function AllPlaces({route}){

    const [places , setPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused && route.params){
            setPlaces((currPlaces) => [...currPlaces , route.params.place])
        }

    } , [isFocused , route.params])

    return <PlaceList places={places} />
    
}

export default AllPlaces