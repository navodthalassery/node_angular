const { date } = require('@hapi/joi');
const mongoose = require('mongoose');

var schema = mongoose.Schema;
const FlightSchema = new schema({
    number: {
        type: String,
        required: true
    },
    place_from: {
        type: String,
        required: true
    },
    place_to: {
        type: String,
        required: true
    },
    time_from: {
        type: Date,
        required: Date.now
    },
    time_to: {
        type: Date,
        default: Date.now
    }
});

var Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;