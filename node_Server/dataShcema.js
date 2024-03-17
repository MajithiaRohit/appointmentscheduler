const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    AppointmentID : Number, 
    ClientName : String, 
    Date : String, 
    Time : String, 
    Location : String
});

module.exports = mongoose.model('userDatas', Schema);