const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apptSchema = new Schema({
    date: { type: Date, required: true },
    listing: { type: Schema.Types.ObjectId, ref: 'Listings' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
    host: { type: Schema.Types.ObjectId, ref: 'Users' }
})

const Appointment = mongoose.model("Appointments", apptSchema)
module.exports = Appointment;