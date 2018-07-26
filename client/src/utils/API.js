import axios from "axios";

export default {
    getListings: function(){
        return axios.get("/api/listings");
    },
    postListing: function(listingData){
        // console.log(listingData)
        return axios.post("/api/post_listing",listingData)
    },
    registerUser: function(userData){
        // console.log(userData)
        return axios.post("/api/register",userData)
    },
    getListing: function(id){
        return axios.get("/api/listing/"+id)
    },
    saveListing: function(id){
        return axios.post("/api/save_listing",id)
    },
    getMySavedListings: function(){
        return axios.get("/api/saved/listings")
    }
}