const express = require('express');
const db = require('./models');

const app = express(); // create express app

const articleRouter = require('./routes/Articles');

app.use(express.json());
app.use("/articles", articleRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('server started on port 3000');
    });
});