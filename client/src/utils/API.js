import axios from "axios";

export default {
    getListings: function () {
        return axios.get("/api/listings");
    },
    postListing: function (listingData) {
        console.log(listingData)
        return axios.post("/api/listing", listingData)
    },
    registerUser: function (userData) {
        console.log(userData)
        return axios.post("/api/register", userData)
    },
    getUserListings: function (user) {
        return axios.get(`/api/userListings/${user}`)
    },
}