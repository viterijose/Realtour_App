import axios from "axios";

export default {
    getAllListings: function(){
        return axios.get("/api/listings");
    },
    postListing: function(listingData){
        // console.log(listingData)
        return axios.post("/api/post/listing",listingData)
    },
    registerUser: function(userData){
        // console.log(userData)
        return axios.post("/api/register",userData)
    },
    getListing: function(id){
        return axios.get("/api/listing/"+id)
    },
    saveListing: function(id){
        return axios.post("/api/save/listing",id)
    },
    getMySavedListings: function(){
        return axios.get("/api/saved/listings")
    },
    deleteListing: function(id){
        return axios.delete("/api/listing/"+id)
    }
}