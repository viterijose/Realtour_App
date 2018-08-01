const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const realtourSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Users' },
  appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointments' }],
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  coordinates: [Number],
  img: {type: String , data: Buffer},
  price: { type: Number, required: true },
  openHouse: {start: {type: Date}, end: {Type: Date}},
  pub_date: { type: Date, default: Date.now }
})

// Virtual for listings' URL
realtourSchema
  .virtual('url')
  .get(function () {
    return `/catalog/listings/${this._id}`;
  });

const Realtour = mongoose.model("Listings", realtourSchema);

module.exports = Realtour;