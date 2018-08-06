const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    postedListings: [{ type: Schema.Types.ObjectId, ref: 'Listings' }],
    savedListings: [{ type: Schema.Types.ObjectId, ref: 'Listings' }],
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointments' }],
    savedListings: [{ type: Schema.Types.ObjectId, ref: 'Listings' }],
    ub_date: { type: Date, default: Date.now }
})

const newUser = mongoose.model("Users", userSchema);

module.exports = newUser;