const express=require("express")
const Route=express.Router()
const {Register,Login}=require("../controller/CompanyController")
Route.post("/Register",Register)
Route.post("/Login",Login)

module.exports=Route
