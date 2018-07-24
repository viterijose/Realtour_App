const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const realtourSchema = new Schema({
    ownerName: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    pub_date: {type:Date, default:Date.now}
})

const Realtour = mongoose.model("listings", realtourSchema);

module.exports = Realtour;