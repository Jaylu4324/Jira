const Register=(req,res)=>{
    res.send(req.body.empId)
}
const Login=(req,res)=>{
    res.send("Login  hello")
}
module.exports={Register,Login}