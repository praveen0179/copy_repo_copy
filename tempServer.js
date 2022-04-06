const userModel = require('./internalFiles/modelApp/mongo.js');

const express = require('express');

const app = express();

const mongo = require('mongoose');

const cookieParser = require('cookie-parser');

app.use(express.json());

app.listen(3200);

app.use(cookieParser());

const userRouter = express.Router();
const authRouter = express.Router();

app.use('/user', userRouter);
app.use('/Auth', authRouter);

