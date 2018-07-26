const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const realtourSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: 'Users' },
  appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointments' }],
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  coordinates: [Number],
  price: { type: Number, required: true },
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