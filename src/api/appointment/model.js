
var restful = require('node-restful');
var mongoose = restful.mongoose;

var appointmentSchema = new mongoose.Schema({
  date: Date,
  name: String,
  phone: String,
  VaccineName:String,
  Center:String,
  status: Boolean
});


module.exports = restful.model('Appointments', appointmentSchema);