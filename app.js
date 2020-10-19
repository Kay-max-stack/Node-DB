const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbPusher = require('./models/nodeDB');
const dataRoutes = require('./routes/routes');
require('dotenv').config();



const dbURI = `${process.env.db}`;

app.set('view engine', 'ejs');
app.use(express.static('public')); 
app.use(express.urlencoded({extended: true}));
app.use(dataRoutes);
app.use((req,res) => {
  res.render('404');
});

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
  app.listen(3333, () => {
    console.log('nodemon watches app.js on Port: 3333');
  });
})
.catch((err) => {
  console.log(err);
});





