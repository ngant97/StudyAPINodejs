const express= require("express");
const router=express.Router();
const {user} =require('../helper');

router.post('/user',(req,res)=>{
user.registerUser(function (data) {
    console.log(data)
    res.status(200).send({
        success:"1"
    })
})
});

module.exports=router;
