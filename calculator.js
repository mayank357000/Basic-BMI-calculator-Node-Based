//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(express.urlencoded());
//.json and .text() bhi hai ,and this urlencoded is for form inputs

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  // console.log(req.body);
  var n1=Number(req.body.num1);//by default stirng hoga request ka bheja
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send("Ye le tera cchutiya sa calculation "+result);
});
app.get("/bmicalculator",function(req,res){//jab url pr pahuche
  res.sendFile(__dirname+"/server.html");
});
app.post("/bmicalculator",function(req,res){//when post request applies
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=weight/Math.pow(height,2);
  res.send("tera bmi hai "+bmi);
});
app.listen(3000,function(){
  console.log("listen to it");
});
