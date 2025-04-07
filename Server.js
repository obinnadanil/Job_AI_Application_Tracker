const express = require('express');
const cors = require('cors');
require('dotenv').config();
const apiRoute = require('./src/routes/ApiRoute');

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}));
const allowedOrigins = ['http://localhost:3000', 'https://job-ai-tracker-frontend.vercel.app']; 
app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
app.use('/api', apiRoute);


app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));