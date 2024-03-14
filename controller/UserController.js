const modal = require('../Model/UserSchema')

const Register=(req,res)=>{
    let {Name,Gender,Email,Password,Designation}=req.body

    modal.findOne({Email}).then((data)=>{
        res.send({msg:"already registerd"})

    }).catch((err)=>{
        const data=new modal({
            Name,
            Gender,
            Email,
            Password,
            Designation
        })
        
        data.save().then((dbdata)=>{
            res.send({msg:"success",data})
        })
        .catch((err)=>{
            res.send({err})
        })
    })
    

}
const Login=(req,res)=>{
    let {Email,Password} = req.body

    modal.findOne({Email}).then((data)=>{
        if (Email == data.Email && Password == data.Password) {
            
            res.send({msg:"Login Success"})
        }
        else{
            res.send({msg:"not matched"})
        }
    }).catch((Err)=>{
        res.send({Err})
    })
}
module.exports={Register,Login} 