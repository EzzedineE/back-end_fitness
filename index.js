var cors = require('cors')
require('dotenv').config()
const authRoutes = require('./routes/authRoute')
const clubRoutes = require('./routes/clubRoute')
require('./data/connect')
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/static', express.static(__dirname + '/uploads'));
app.listen(process.env.PORT || 3000);
app.use('/api/auth', authRoutes);
app.use('/api/club', clubRoutes);




