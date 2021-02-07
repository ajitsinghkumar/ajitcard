const mongoose=require("mongoose");
const formdataschema=mongoose.Schema({
    id:String,
    firstname:String,
    lastname:String,
    email:String
});
const formdatamodel=mongoose.model("formdata",formdataschema);
module.exports=formdatamodel;