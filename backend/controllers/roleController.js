const roleModel = require("../models/roleModel")
const  createRole = async (req, res) => {
    const { role ,permissions} = req.body;

    const newRole = new roleModel ({role,permissions})
    newRole.save().then((result)=>{
        res.status(201).json({
            message: 'role created successfully!' 
        })
    }).catch(err=>{
  res.status(400).json({ error: err.message });
    })
   
    
}

module.exports = {createRole}