const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    AppointmentID : String, 
    ClientName : String, 
    Date : Date, 
    Time : String, 
    Location : String
});

module.exports = mongoose.model('userDatas', Schema);