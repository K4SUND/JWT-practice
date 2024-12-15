
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();



router.post("/login",(req,res)=>{

   //username,password checking
   //ok
   //

   const userName = req.body.userName;

   const user = {
     name:userName
   };


   //environmental variable
   //env file


   const token = jwt.sign(user,process.env.TOKEN_KEY);

   res.send(
    {token}
    
   );



});


router.delete("/logout",(req,res)=>{
    //token ek null krnna hari delete krnna hari krnna
    
})




module.exports = router;