const express = require('express');
const db = require('./models');

const app = express(); // create express app

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('server started on port 3000');
    });
});