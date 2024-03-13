const Register=(req,res)=>{
    res.send(req.body.empId)
}
const Login=(req,res)=>{
    res.send("Login")
}
module.exports={Register,Login}