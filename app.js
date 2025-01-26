const express = require('express');

app = express()


app.use("/home",(req,res)=>{
    console.log("listning 3000")
    res.send("hellooo ")
   
})

app.use("/dashboard",(req,res)=>{
    console.log("listning 3000")
    res.send("dashboard ")
   
})
app.listen("3000")