const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./routes/user.route');
const { connect } = require('./utils/db');

app.use('/api/users', userRoute);

exports.start = () => {
    connect().then(() => {
        console.log('💃 💃 💃 💃 💃 💃 💃 💃 💃  - Users connected successfully to DB');
    }).catch((e) => {
        console.log('🔇 🔇 🔇 🔇 🔇 🔇 🔇 🔇 🔇  - Users could not connect to the database');
    });
    app.listen(port, () => {
        console.log(`Listening at port ${port}`);
    });
}
