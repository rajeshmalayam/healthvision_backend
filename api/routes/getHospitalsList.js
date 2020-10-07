const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const AddHospital = require('../models/addHospital');

router.get('/',(req, res, next) => {
    AddHospital.find()
      .exec()
      .then(docs => {
        console.log(docs[0].city);
        const response = {
          list : docs
        };
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error : err
        });
      });
  });

module.exports = router;
