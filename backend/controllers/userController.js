const express = require("express");
const user = require("../models/usersModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")



const register = (req,res)=>{
    const role = "6819f1af0f5bda66602b468b"
    const { Fname,Lname, email, password } = req.body;
     const newUser = new user({
        Fname,Lname, email, password ,role
     }) 
     newUser.save().then((result)=>{
        console.log(res)
        res.status(201).json({
            message: 'User registered successfully!' 
        })
     }).catch(err=>{
        res.status(400).json({error: error.message})
     })
        
}


///////////////login/////////////////////
const login = (req,res)=>{
    const {email,password} = req.body 
    user.findOne({email}).populate("role").then((result)=>{
        if(!result){
          return  res.status(404).json( 'User  not found !' )
        }

  const compPassword =   bcrypt.compare(password, result.password)
  if(!compPassword){
    return  res.status(404).json( 'invalid pass  not found !' )
  }

  const payload={
    role :result.role, 
    userId : result._id,
    name: result.Fname
  }

  const options = {
          expiresIn: "1h",
        };


        const token = jwt.sign(payload,process.env.SECRET,options)
        res.status(200).json({
            message: "login succ",
            date : result,
            token
        })




    })

  
}

module.exports = {register ,login}


