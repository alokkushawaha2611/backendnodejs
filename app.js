const express = require('express');

app = express()
const {adminAuth} = require('./middlewares/auth.js')

app.use("/admin",adminAuth) 

app.get("/admin/getAllData",(req,res,next)=>{
    res.send("all user data send")
})


app.delete("/admin/deleteAllData",(req,res,next)=>{
    res.send("all user data deleted")
})


app.post("/admin/getAllData",(req,res,next)=>{
    res.send("data added")
})


app.listen("3000",()=>console.log("listning to port 3000"))