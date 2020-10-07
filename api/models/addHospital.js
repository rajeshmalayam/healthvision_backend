const mongoose = require('mongoose');

const addHospitalSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  hospitalname : {type:String, required: true},
  hospitaltype : {type:Array, required: true},
  bloodgroup : {type:Array, required: true},
  city : {type:String, require: true}
});

module.exports = mongoose.model('AddHospital', addHospitalSchema);