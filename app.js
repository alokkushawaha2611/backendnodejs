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

app.get("/user/:id",(req,res,next)=>{
    console.log("hello users")
    next()
    // res.send("hello")
},(req,res,next)=>{
    console.log("hello users")
    next()
    // res.send("hello1")
},(req,res,next)=>{
    console.log("hello users")
    next()
    res.send(req.params.id)
    // res.send("hello2")
})
app.listen("3000",()=>console.log("listning to port 3000"))