var cors = require('cors')
var morgan = require('morgan')

require('dotenv').config()
const emailRoutes = require('./routes/emailRoute')
const authRoutes = require('./routes/authRoute')
const clubRoutes = require('./routes/clubRoute')
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoute')
const commentaireRoutes = require('./routes/comantaireRoute')
const produitRoutes = require('./routes/produitRoute')
const forfaitRoute = require('./routes/forfaitRoute')
const courRoute = require('./routes/coursRoute')

require('./data/connect')
const express = require('express')

const app = express()
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/static', express.static(__dirname + '/uploads'));
app.listen(process.env.PORT || 3000);
app.use('/api/auth', authRoutes);
app.use('/api/club', clubRoutes);
app.use('/api/user', userRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/commentaire', commentaireRoutes);
app.use('/api/Produit', produitRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/forfait', forfaitRoute);
app.use('/api/cours', courRoute);


