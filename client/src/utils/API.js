import axios from "axios";

export default {
    getAllListings: function(){
        return axios.get("/api/listings");
    },
    getUserListings: function (user) {
        // console.log(user)
        return axios.get(`/api/userListings/${user}`)
    },
    createOpenHouse: function(apptData) {
        // console.log(apptData)
        return axios.post('/api/openhouse', apptData)
    },
    createAppointment: function(apptData) {
        return axios.post('/api/appointment', apptData)
    },
    postListing: function(listingData){
        // console.log(listingData)
        return axios.post("/api/post/listing",listingData)
    },
    registerUser: function(userData){
        // console.log(userData)
        return axios.post("/api/register",userData)
    },
    getUser: function(userEmail){
        // console.log(userData)
        return axios.get("/api/user/"+userEmail)
    },
    getListing: function(id){
        return axios.get("/api/listing/"+id)
    },
    saveListing: function(userId,data){
        console.log(data)
        console.log(userId)
        // console.log(savedListings)
        return axios.post("/api/save/listing/"+userId,data)
    },
    getMySavedListings: function(){
        return axios.get("/api/saved/listings")
    },
    deleteListing: function(id){
        return axios.delete("/api/listing/"+id)
    },
    patchListing: function(id,listingData){
        console.log(id)
        console.log(listingData)
        // console.log("IN AXIOS \n"+JSON.stringify(listingData))
        return axios.patch("/api/updateListing/"+id,listingData)
    },
    searchByZipcode: function(listingData){
        // console.log(listingData)
        // console.log("IN API:"+JSON.stringify(listingData))
        return axios.get("/api/findListings/zipcode/"+listingData.data)
    },
    searchByCity: function(listingData){
        // console.log(listingData)
        // console.log("IN API:"+JSON.stringify(listingData))
        return axios.get("/api/findListings/city/"+listingData.data)
    }
}