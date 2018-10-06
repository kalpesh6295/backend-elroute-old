const mongoose = require('mongoose');

//Company model schema for the user 
var companySchema = new mongoose.Schema({
stageOne:{
    category:{ 
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
    },
    website: 
    {   type: String, 
    },
    companyType:{
        type:String,
    },
    //one who creates the company
    admin:{
        type:mongoose.Schema.Types.ObjectId,
    }
},

//Second part of the company
stageTwo:{
    shortIntro:{
        type:String,
        trim:true
    },
    yearEst:{
        type:Date,
        trim:true,
    },
    address:{
        type:String
    },
    certification:{
        type:String
    },
    employeeSize:{
        type:Number
    },
    about:{
        type:String
    },
    workingHours:{
        type:Number
    },
    keywords:{
        type:String
    }
}});

var companyModel = mongoose.model('company',companySchema);

module.exports = {companyModel};
