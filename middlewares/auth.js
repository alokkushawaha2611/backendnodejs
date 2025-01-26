const adminAuth = (req,res,next)=>{
    const token = "abc";
    const isAuthentication = token === "abc";
    if(!isAuthentication){
        res.status(401).send("user is not authentated")
    }else{
        next()
    }
}

module.exports = {
    adminAuth
}