const express=require("express");

const app=express();
const port=4000;

/*get method
app.get("/home",(req,res)=>{
   res.send("<h1>Hello world</h1>") 
})
*/
const path=require("path");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+ "/index.html")) 
 })

app.post("/api/v1/login",(req,res)=>{
  //  const userName=req.body.name;
  res.send(`<h1>Done Mr. ${req.body.name}</h1>
  <br>
   <h2> Your Email is ${req.body.email}</h2>  
   <br>
   <h3>your pass: ${req.body.password}</h3>`)
  console.log(req.body)
})

app.listen(port,()=>{
console.log(`Server is working on port:${port}`);
})

// about get- get is method,like curd app