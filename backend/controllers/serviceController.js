// controllers/serviceController.js

const ServiceModel = require('../models/serviceModel');


const createService = (req, res) => {
    console.log("post /users");
    console.log("body", req.body);
    const { title, details, cost} = req.body;
    const newService = new ServiceModel({
        title, details, cost
    });
  
    console.log(newService);
  
    newService
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          data: result,
          message: "service Created",
        });
      })
      .catch((err) => {
        res.status(500).json({
          data: null,
          message: " Fail to create service",
          err: err,
        });
      });
  };
   ////////////////////////////////////
const getAllSerivces = (req, res) => {
    console.log("/service");
    ServiceModel
      .find({})
      .then((result) => {
        console.log(result);
        res.status(200).json({
          data: result,
          message: "all users",
        });
      })
      .catch((err) => {
        res.status(500).json({
          data: null,
          message: " Fail to create user",
          err: err,
        });
      });
  };
  
  const getServiceById = (req, res) => {
    const { _id } = req.params;
    console.log(req.params);
    ServiceModel
      .find({ id: _id })
      .then((result) => {
        console.log(result);
        res.status(200).json({
          data: result,
          message: " user",
        });
      })
      .catch((err) => {
        res.status(500).json({
          data: null,
          message: " Fail to get user",
          err: err,
        });
      });
  };

  const updateService = (req, res) => {
    const { id } = req.params; // Get ID from the request parameters
    const { title, details,cost} = req.body; // Get new data from request body
    
 ServiceModel.findByIdAndUpdate(id, { title, details,cost}) 
 .then((result) => {
    console.log(result)
    if(result){
        console.log(result);
        res.status(200).json({
          data: result,
          message: "updated service",
        });
    
    }
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: " Fail to get user",
      err: err,
    });
  });;
  
    
  };



  const deleteService = (req, res) => {
    const { id } = req.params; // Get ID from the request parameters
   
    
 ServiceModel.findByIdAndDelete(id) 
 .then((result) => {
    console.log(result)
    if(result){
        console.log(result);
        res.status(200).json({
          data: result,
          message: "delete service",
        });
    
    }
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: " Fail to get user",
      err: err,
    });
  });;
  
    
  };

  module.exports = {
    createService,
    getServiceById,
    getAllSerivces,
    updateService,
    deleteService
}

   
