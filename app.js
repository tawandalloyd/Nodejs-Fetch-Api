const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRoute');
// const viewRouter = require('./routes/viewRoute');


// Start express app
const app = express();

app.use(bodyParser.json());

// app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;