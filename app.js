const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const cors = require('cors');
const userRoutes = require('./Routes/user.routes');


const connectToDB = require('./db/db');
connectToDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRoutes);


app.get('/', (req, res) =>{
    res.send('Hello World!')
});

module.exports = app;
