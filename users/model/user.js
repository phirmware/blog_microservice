const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = mongoose.model('user', UserSchema);
