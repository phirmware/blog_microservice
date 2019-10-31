const express = require('express');
const app = express();
const port = 3001;
const { connect } = require('./utils/db');
const blogRouter = require('./routes/blog.router');

app.use('/api/blogs', blogRouter);

exports.start = async () => {
    try {
        await connect();
        console.log('⛅ ⛅ ⛅ ⛅ ⛅ ⛅ ⛅ ⛅ - Blog connected successfully');
    } catch (e) {
        console.log('🔇 🔇 🔇 🔇 🔇 🔇 🔇 🔇 - Blog faild to connect');
    }
    app.listen(port, () => {
        console.log(`Blogs listening at port ${port}`);
    });
}
