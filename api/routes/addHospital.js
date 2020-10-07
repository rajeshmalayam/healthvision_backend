const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const AddHospital = require('../models/addHospital');

console.log("abc");

router.post('/', (req,res,next) => {

  const addhospital = new AddHospital({
    _id : new mongoose.Types.ObjectId(),
    hospitalname : req.body.hospitalname,
    hospitaltype : req.body.hospitaltype,
    bloodgroup : req.body.bloodgroup,
    city : req.body.city
  });
  addhospital.save()
  .then(result => {

      console.log(result);
      res.status(200).json({
        message : 'Hospital Added successfully'
      });
  })
  .catch(err => {
    res.status(500).json({
      error : 'Failed to add Hospital'
    });
  });

});




module.exports = router;
