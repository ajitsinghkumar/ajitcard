var express = require('express');
var router = express.Router();
 var formdatamodel=require("../models/formdata.model");

const mongoose = require('mongoose');
const db = "mongodb+srv://Ajit15ca05:Ajit15ca05@cluster0.ma9vh.mongodb.net/html?retryWrites=true&w=majority";
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true  }, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb');      
    }
});
      

router.get('/', function(req, res, next) {

    formdatamodel.find((err,data)=>{
      if(data){
          console.log(data);
        res.json(data)
      }else{
        console.log(err);
      }
  });
  
  
});
router.post('/', function(req, res, next) {
  let userData = req.body;
   let htmld=new formdatamodel(userData);
     htmld.save(()=>{
       console.log("data is saved");
       formdatamodel.find((err,data)=>{
        if(data){
          res.json(data)
        }else{
          console.log(err);
        }
     });
  //listOfQuestions.push(userData);
    });
  
});



module.exports = router;
