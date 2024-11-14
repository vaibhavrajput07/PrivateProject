const express=require("express");
const mysql=require("mysql2");
const app=express();
const port=8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"lovers",
    password:"2311"
});
app.get("/user",(req,res)=>{
    // res.send("fetch successfully..");
    res.render("homePage.ejs");
});
app.post("/user/add",(req,res)=>{
    let{firstName,secondName}=req.body;
    let data=[firstName,secondName];
    let q="insert into user1(firstName,secondName) values(?,?)";
    if(firstName==0 || secondName==0){
        // res.redirect("/user");
    }
    else{
        connection.query(q,data,(err,result)=>{
            try{
                if(err) throw err;
                res.render("result.ejs");
                // res.send("successfully submitted");
            }
            catch(err){
                console.log(err);
                res.send("error occured..");
            }
             
        });
    }
    
    // res.send("post request submitted");
})
app.listen(port,()=>{
    console.log("working well..");
});