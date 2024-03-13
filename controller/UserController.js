const Register=(req,res)=>{
    res.send(req.body)
}
const Login=(req,res)=>{
    res.send("Login")
}
module.exports={Register,Login}