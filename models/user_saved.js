const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_savedSchema = new Schema({
    listing_id: { type: String, required: true },
})

const user_saved = mongoose.model("user_saved", user_savedSchema);

module.exports = user_saved;