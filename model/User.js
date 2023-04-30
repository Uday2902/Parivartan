const mongoose = require('mongoose');
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
    type: {type: String},
    username: {type: String},
    email: {type: String},
    dob: {type: String},
    userpassword: {type: String},
    ngoname: {type: String},
    ngoid: {type: String},
    ngoemail: {type: String},
    ngopassword: {type: String}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',User);