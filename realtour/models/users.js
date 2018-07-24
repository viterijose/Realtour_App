const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    ub_date: {type:Date, default:Date.now}
})

const newUser = mongoose.model("Users", userSchema);

module.exports = newUser;