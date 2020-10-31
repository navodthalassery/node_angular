const { string } = require('@hapi/joi');
const mongoose = require('mongoose');

var schema = mongoose.Schema;
const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'User'
    }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;