export class Place{
    constructor(title  , imageUri , location){
        this.title = title,
        this.address = location.address
        this.id = Date.now()*Math.random()*100,
        this.imageUri = imageUri
        this.location = {lat : location.lat , lng : location.lng}

    }
}