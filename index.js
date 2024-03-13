const express=require("express")
const app=express()
app.use(express.json())
const UserRoute=require("./Routes/User")
app.use("/User",UserRoute)


app.listen(3000,()=>{
    console.log("port is run on  3000")
})