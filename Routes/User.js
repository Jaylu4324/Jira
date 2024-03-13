const express=require("express")
const routes=express.Router()
const {Register,Login}=require("../controller/UserController")
routes.post("/Register",Register)
routes.get("/Login",Login)


module.exports=routes