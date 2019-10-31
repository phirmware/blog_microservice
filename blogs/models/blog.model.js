const mongoose = require('mongoose');

const BlogModel = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: String,
    content: String
});

module.exports = mongoose.model('blogs', BlogModel);
