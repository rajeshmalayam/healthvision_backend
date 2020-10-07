const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



mongoose.connect('mongodb+srv://malayamrajesh:rajesh123@rajesh1.4u6vq.mongodb.net/healthdata?retryWrites=true&w=majority');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());



const addHospitalRoutes = require('./api/routes/addHospital');
const getHospitalsRoutes = require('./api/routes/getHospitalsList');


app.use('/addHospital', addHospitalRoutes);
app.use('/getHospitalsList',getHospitalsRoutes);




app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
});



app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
      error: {
        message : error.message
      }
    });
});


module.exports = app;