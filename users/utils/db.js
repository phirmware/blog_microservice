const mongoose = require('mongoose');

exports.connect = () => {
    return mongoose.connect('mongodb://db/microserviceblog', { useNewUrlParser: true });
}