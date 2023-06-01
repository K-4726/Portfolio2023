const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    const uname=req.body.first_name+" "+req.body.last_name;
    res.render("success",{name: uname, email: req.body.e_mail});
});
app.listen("3000",function(){
    console.log("Server started on port 3000.")
});